import { animIn } from "../../utils/anims";
import Iridescence from "../Slimy";
import { motion } from "framer-motion";

import { splitText } from "../../utils/helpers";

export default function Hero({ end }: { end: boolean }) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="max-h-[70vh] text-[12vw] lg:text-[8vw] max-w-[1360px] md:max-h-[90vh] relative overflow-hidden rounded-4xl">
          {end ? (
            <div
              style={{
                fontSize: "clamp(3rem, 11vw, 8.5rem)",
              }}
              className="absolute pointer-events-none top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mix-blend-color-burn font-bold"
            >
              {/* text-[12vw] lg:text-[8vw] */}
              <div className="text-[rgb(60,57,57)] [&>div]:leading-[90%]">
                <div
                  style={{
                    fontSize: "clamp(1.5rem, -1.6563rem + 8.5vw, 3.125rem)",
                  }}
                  className="overflow-hidden flex items-center flex-nowrap 
                 mb-2 md:mb-5"
                >
                  {/* text-[6vw] sm:text-[4vw] lg:text-[3vw] */}

                  <motion.div
                    className=" flex font-extrabold"
                    variants={animIn}
                    initial="hide"
                    animate="show"
                    transition={{
                      staggerChildren: 0.05,
                      delayChildren: 0.1,
                    }}
                  >
                    {splitText("GOURAV ", {
                      visualDuration: 0.5,
                      ease: "easeInOut",
                    })}
                  </motion.div>
                  <motion.div
                    className=" flex"
                    variants={animIn}
                    initial="hide"
                    animate="show"
                    transition={{
                      staggerChildren: 0.05,
                      delayChildren: 0.1,
                    }}
                  >
                    {splitText("THAKUR", {
                      visualDuration: 0.5,
                      ease: "easeInOut",
                    })}
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    className=" flex"
                    variants={animIn}
                    initial="hide"
                    animate="show"
                    transition={{
                      staggerChildren: 0.05,
                      delayChildren: 0.1,
                    }}
                  >
                    {splitText("< SOFTWARE", {
                      visualDuration: 0.5,
                      ease: "easeInOut",
                    })}
                  </motion.div>
                </div>

                <div className="overflow-hidden">
                  <motion.div
                    className=" flex"
                    variants={animIn}
                    initial="hide"
                    animate="show"
                    transition={{
                      staggerChildren: 0.05,
                      delayChildren: 0.1,
                      stiffness: 100,
                      staggerDirection: -1,
                    }}
                  >
                    {splitText("DEVELOPER />", {
                      visualDuration: 0.5,
                      ease: "easeInOut",
                    })}
                  </motion.div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="w-[95vw] h-[80vh] max-w-[1440px]">
            <Iridescence
              color={[1, 1, 1]}
              mouseReact={false}
              amplitude={0.1}
              speed={1.0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
