import { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimationSequence, animate } from "motion/react";

export default function LoadScreen({
  end,
  unMountLoader,
}: {
  end: boolean;
  unMountLoader: () => void;
}) {
  // useEffect(() => {
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  useEffect(() => {
    if (end) {
      const sequence: AnimationSequence = [
        [".loader", { scale: 25 }, { visualDuration: 5 }],
        [".loader", { opacity: 0, pointerEvents: "none" }, { at: 0.7 }],
      ];
      animate(sequence, { duration: 5 }).then(() => {
        unMountLoader?.();
        console.log("unmounting loader 🦆");
      });
    }
  }, [end]);

  return (
    <motion.div className="loader fixed flex justify-center items-center top-0 left-0 h-screen w-full mix-blend-lighten max-w-screen bg-white z-[100]">
      <StyledStar
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        // fill="white"/
        className="aspect-square h-[20vw] md:h-[10vw] fill-black  stroke-1 stroke-blue-300"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clipRule="evenodd"
        />
      </StyledStar>
      {/* <StyledStar
        xmlns="http://www.w3.org/2000/svg"
        className="aspect-square h-[20vw] md:h-[10vw] fill-black"
        version="1.1"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 5039.37 4645.67"
      >
        <defs></defs>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <g id="_2261124771232">
            <path d="M2069.35 2648.59c-395.3,-34.24 -567.89,-192.4 -586.52,-592.67 -667.87,-9.26 -581.86,-537.33 -572.91,-743.59 5.89,-136.13 -154.33,-1033.9 -212.06,-1148.3 -65.79,-130.5 -257.47,-218.11 -441.18,-115.91 -184.18,102.46 -146.17,310.84 -126.66,555.02 33.36,418.37 60.77,839.89 91.39,1264.52 86.33,1198.17 -576.63,991.18 393.65,1971.18 334.07,337.42 927.77,1161.49 1736.73,628.61 206.57,-136.08 510.9,-475.99 695.43,-662.8l1357.15 -1357.26c140.94,-139.39 601.05,-501.07 551.39,-761.74 -33.56,-176.16 -188,-291.5 -394.94,-226.33 -102.41,32.27 -307.63,262.48 -375.8,331.53l-1372.25 1341.84c-401.2,230.83 -730.92,-64.76 -743.44,-484.11l0 0 0.03 0.01z" />
            <path d="M3003.16 726.76c-141.15,45.41 -1219.88,1078.17 -1262.19,1256.09 -63.31,266.31 224.47,663.37 632.75,229.17l415 -415.99c106.96,-93.87 130.07,-108.3 223.33,-216.55 115.55,-134.06 353.61,-312.44 390.55,-450.64 76.6,-286.74 -146.01,-483.64 -399.44,-402.07l0 0 -0 -0.01z" />
            <path d="M2098.83 429.41c-29.17,11.59 -1054.94,762.42 -965.47,1131.8 41.37,171.04 237.66,309.14 453.85,224.37 79.5,-31.19 610.61,-584.55 719.95,-690.94 522.38,-508.36 -34.7,-733.96 -208.33,-665.23l0 0z" />
            <path d="M3211.34 1649.65c-137.11,86.74 -535.72,531.12 -682.61,673.87 -106.39,103.44 -261.34,188.83 -208.59,419.15 42.83,186.92 236.37,273.7 426.95,196.18 111.35,-45.31 579.58,-536.96 702,-658.46 476.61,-473.14 76.19,-829.34 -237.76,-630.74l0 0 0.01 0z" />
          </g>
        </g>
      </StyledStar> */}
    </motion.div>
  );
}

const StyledStar = styled.svg`
  animation: Spin 2s ease-in-out infinite;
  transform-origin: center;

  @keyframes Spin {
    0% {
      transform: rotate(0);
      scale: 1;
    }
    /* 80% {
      transform: rotate(360deg);
    } */
    60% {
      transform: rotate(360deg);
      scale: 1.5;
    }

    100% {
      transform: rotate(360deg);
      scale: 1;
    }
  }
`;

// @keyframes Spin {
//     0% {
//       transform: rotate3d();
//     }
//     30% {
//       transform: rotateY(0);
//     }
//     35% {
//       transform: rotateY(30deg);
//     }
//     45% {
//       transform: rotateY(-30deg);
//     }
//     55% {
//       transform: rotateY(30deg);
//     }
//     65% {
//       transform: rotateY(-30deg);
//     }
//     70% {
//       transform: rotateY(0);
//     }
//     100% {
//       transform: rotateY(0);
//     }
//   }
