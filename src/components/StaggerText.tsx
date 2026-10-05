import { splitString } from "../utils";
import { useState } from "react";

const getTransformStyles = (
  isMouseEntered: boolean,
  index: number,
  stagger: boolean
) => ({
  transform: `translateY(${isMouseEntered ? "-100%" : "0%"})`,
  transitionDelay: stagger ? `${index * 0.02}s` : `none`,
  ...(!stagger && { transition: "0.35s ease" }),
});

export function StaggerText({
  text,
  stagger = true,
  asLink = true,
}: {
  text: string;
  stagger?: boolean;
  asLink?: boolean;
}) {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  function getJsx() {
    return splitString(text).map((char, i) => {
      return (
        <span key={i} className=" stagger-link-char-container">
          <span style={getTransformStyles(isMouseEnter, i, stagger)}>
            {char}
          </span>
          <span style={getTransformStyles(isMouseEnter, i, stagger)}>
            {char}
          </span>
        </span>
      );
    });
  }

  if (!asLink) {
    return (
      <div
        className="stagger-link-text-container"
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
      >
        {getJsx()}
      </div>
    );
  }

  return (
    <a
      href={`#${text.toLowerCase()}`}
      className="stagger-link-text-container"
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
    >
      {getJsx()}
    </a>
  );
}
