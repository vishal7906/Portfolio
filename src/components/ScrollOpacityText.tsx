"use client";

import { createContext, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { cn } from "../utils";

type TextOpacityEnum = "none" | "soft" | "medium";
type ViewTypeEnum = "word" | "letter";

type TextGradientScrollType = {
  text: string;
  type?: ViewTypeEnum;
  className?: string;
  textOpacity?: TextOpacityEnum;
};

type TextGradientScrollContextType = {
  textOpacity?: TextOpacityEnum;
  type?: ViewTypeEnum;
};

const TextGradientScrollContext = createContext<TextGradientScrollContextType>(
  {}
);

// function useGradientScroll() {
//   const context = useContext(TextGradientScrollContext);
//   return context;
// }

export default function ScrollOpacityText({
  text,
  className,
  type = "letter",
  textOpacity = "soft",
}: TextGradientScrollType) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1.05", "end center"],
  });

  const words = text.split(" ");

  return (
    <TextGradientScrollContext.Provider value={{ textOpacity, type }}>
      <motion.p
        ref={ref}
        style={{ "--progress": scrollYProgress } as any}
        className={cn("relative flex m-0 flex-wrap", className)}
      >
        {words.map((word, wordIndex) => {
          const start = wordIndex / words.length;
          const end = start + 1 / words.length;

          if (type === "word") {
            return <Word key={wordIndex} word={word} range={[start, end]} />;
          } else {
            return (
              <LetterWord key={wordIndex} word={word} range={[start, end]} />
            );
          }
        })}
      </motion.p>
    </TextGradientScrollContext.Provider>
  );
}

const Word = ({ word, range }: { word: string; range: number[] }) => {
  // const { textOpacity } = useGradientScroll();
  const start = range[0];
  let step = (range[1] - range[0]) * 3; // multiply by 3 to stagger the reveal across 3 words
  if (start + step > 1) step = 1 - start;
  if (step <= 0) step = 0.001;
  const factor = `clamp(0, calc((var(--progress) - ${start}) / ${step}), 1)`;

  return (
    <span className="relative me-[0.45em] mt-2 inline-block">
      <span
        style={
          {
            opacity: factor,
            filter: `blur(calc(8px * (1 - ${factor})))`,
          } as any
        }
        className="inline-block"
      >
        {word}
      </span>
    </span>
  );
};

const LetterWord = ({ word, range }: { word: string; range: number[] }) => {
  // const { textOpacity } = useGradientScroll();
  const amount = range[1] - range[0];
  const step = amount / word.length;

  return (
    <span className="relative me-[0.3em] mt-2 inline-block whitespace-nowrap">
      {word.split("").map((char, charIndex) => {
        const start = range[0] + charIndex * step;
        let charStep = step * 3;
        if (start + charStep > 1) charStep = 1 - start;
        if (charStep <= 0) charStep = 0.001;
        const factor = `clamp(0, calc((var(--progress) - ${start}) / ${charStep}), 1)`;

        return (
          <span key={charIndex} className="relative inline-block">
            <span
              style={
                {
                  opacity: factor,
                  filter: `blur(calc(8px * (1 - ${factor})))`,
                } as any
              }
              className="inline-block"
            >
              {char}
            </span>
          </span>
        );
      })}
    </span>
  );
};
