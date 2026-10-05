import { AnimationProps, motion } from "framer-motion";
import { letter } from "./anims";

export function splitText(
  text: string,
  transition: AnimationProps["transition"]
) {
  return text.split("").map((l, index) => (
    <motion.div
      transition={{
        type: "spring",
        bounce: 0.25,
        ...transition,
      }}
      variants={letter}
      key={index}
    >
      {l === " " ? "\u00A0" : l}
    </motion.div>
  ));
}
