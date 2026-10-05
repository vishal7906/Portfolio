import { Variants } from "motion/react";

export const animIn = {
    hide: {
        opacity: 1,
    },
    show: {
        opacity: 1,
    },

};

export const letter: Variants = {
    hide: {
        y: "110%",
    },
    show: {
        y: 0,
        transformStyle: "preserve-3d",
    },

};