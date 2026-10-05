import Iridescence from "../Slimy";
import { StaggerText } from "../StaggerText";

export default function Footer() {
  const sp = new URLSearchParams(window.location.search);
  const bg = sp.get("bg");

  return (
    <div
      id="footer"
      className="appContent overflow-hidden pt-8 md:pt-12 pb-10"
    >
      {/* <div className="text-center overflow-hidden text-[18vw] md:text-[16vw] lg:[12vw] h-fit w-fit mx-auto font-nohemi font-bold relative tracking-wider uppercase">
        <div className="absolute inset-0 z-[-1] w-full h-full">
          <Iridescence
            color={[1, 1, 1]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
          />
        </div>
        VISHAL
      </div> */}
      <div className="w-full max-w-[1000px] h-[100px] sm:h-[150px] md:h-[220px] mx-auto footer_slashed">
        {bg === "light" ? (
          <Iridescence
            color={[0.7, 1, 1]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
          />
        ) : (
          <video src="dark-blue-waves.mp4" className="hue-rotate-180 invert-100" muted loop autoPlay />
        )}
      </div>

      <div className="w-full border-t border-black/20 mt-5 pt-5 text-center">
        <div className="flex justify-between items-center gap-2">
          <a
            href={"mailto:gourav98055@gmail.com"}
            className="font-semibold tracking-wider"
          >
            Let's connect
          </a>
          <div className="flex gap-5">
            {SM.map((i) => {
              return (
                <a
                  key={i.name}
                  href={i.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold tracking-wider"
                >
                  <StaggerText asLink={false} text={i.name} stagger />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const SM = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vishal-sanwal/",
  },

  {
    name: "Email",
    link: "mailto:viratrmr@gmail.com",
  },
  {
    name: "Github",
    link: "https://github.com/Vishal7906?tab=repositories",
  },
];
