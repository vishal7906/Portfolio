import { StaggerText } from "../StaggerText";

const LINKS = ["Home", "About", "Projects", "Skills"];

export default function Nav() {
  return (
    <>
      <svg style={{ display: "none" }}>
        <filter
          id="liquid-glass-nav"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <style>
        {`
          .nav-glass-container {
            position: absolute;
            inset: 0;
            z-index: 0;
            border-radius: 9999px;
            pointer-events: none;
          }

          .nav-glass-container::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 0;
            overflow: hidden;
            border-radius: inherit;
            box-shadow: inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7), inset 0 0 3px 1px rgba(255, 255, 255, 0.7);
            background-color: rgba(255, 255, 255, 0.45);
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.20'/%3E%3C/svg%3E");
          }

          .nav-glass-container::after {
            content: '';
            position: absolute;
            z-index: -1;
            inset: 0;
            border-radius: inherit;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            filter: url(#liquid-glass-nav);
            -webkit-filter: url(#liquid-glass-nav);
            overflow: hidden;
            isolation: isolate;
          }
        `}
      </style>

      <div className="px-4 md:px-44 max-w-[1440px] mx-auto !py-3 md:!py-5 z-[50] sticky top-0 left-0">
        <div className="relative flex justify-between items-center px-4 py-3 rounded-full mt-2">
          <div className="nav-glass-container"></div>

          <div className="flex gap-2 items-center relative z-10">
            {/* <div className="tracking-wide font-bold text-2xl md:text-3xl">
              G
            </div> */}
            <div className="">
              <img src="/logo.png" width={32} height={32} className="rounded-full" />
            </div>
          </div>

          <div className="flex gap-4 md:gap-5 md:uppercase items-center font-semibold tracking-wider md:tracking-widest relative z-10">
            {LINKS.map((i) => {
              if (i === "Resume") {
                return (
                  <a
                    key={i}
                    target="_blank"
                    href="/Vishal_Resume.pdf"
                    download={"Vishal_Resume.pdf"}
                  >
                    <StaggerText text={i} key={i} asLink={false} />
                  </a>
                );
              } else {
                return <StaggerText text={i} key={i} stagger />;
              }
            })}
          </div>
          <div className="hidden md:flex"></div>
          {/* <div className="block md:hidden relative z-10">
            <motion.div
              initial={{ opacity: 0, width: 0, height: 0 }}
              className={cn(
                "wrapper absolute overflow-hidden top-0 z-5 right-0 w-[150px] h-fit rounded-2xl bg-white/15 backdrop-blur-lg mix-blend-difference",
                drop ? "pointer-events-auto" : "pointer-events-none"
              )}
            >
              <div className="flex flex-col gap-4 tracking-wider pl-5 justify-center my-10">
                {LINKS.map((i) => {
                  if (i === "Resume") {
                    return (
                      <motion.a
                        initial={{ opacity: 0, x: 30, y: 5 }}
                        key={i}
                        target="_blank"
                        href="/Vishal_Resume.pdf"
                        download={"Vishal_Resume.pdf"}
                        className="stagger-item"
                        onClick={() => onDropToggle(false)}
                      >
                        <StaggerText text={i} key={i} asLink={false} />
                      </motion.a>
                    );
                  } else {
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: 30, y: 5 }}
                        onClick={() => onDropToggle(false)}
                        className="stagger-item"
                      >
                        <StaggerText text={i} key={i} stagger />
                      </motion.div>
                    );
                  }
                })}
              </div>
            </motion.div>
            <div
              className="cursor-pointer relative z-[10] flex mix-blend-hard-light flex-col gap-1 p-2"
              onClick={() => onDropToggle(!drop)}
            >
              <motion.div
                animate={{
                  rotate: drop ? 44 : 0,
                  width: drop ? 17.5 : "auto",

                  transition: { duration: 0.3 },
                }}
                className={cn("origin-left", commClass)}
              />

              <motion.div
                animate={{
                  opacity: drop ? 0 : 1,
                  rotate: drop ? 180 : 0,
                  transition: { duration: 0.3 },
                }}
                className={cn("", commClass)}
              />
              <motion.div
                animate={{
                  rotate: drop ? -44 : 0,
                  transition: { duration: 0.3 },
                }}
                className={cn("origin-left", commClass)}
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

// const commClass = "bg-black h-[2px] w-[17px] rounded-[1px] shrink-0 ";
