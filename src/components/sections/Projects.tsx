import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

export default function Projects() {
  return (
    <div id="projects" className="appContent">
      <SectionHeader
        title="MY WORK"
        decoration="02"
        className=" pt-20 md:pt-32"
      />
      <div className="pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-2 flex-wrap justify-center gap-5 lg:gap-10">
        {data.map((i) => {
          return <Item i={i} key={i.name} />;
        })}
      </div>
    </div>
  );
}

function Item({ i }: { i: (typeof data)[0] }) {
  const [hover, setHover] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <motion.a
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      exit={{ y: -30, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: false, amount: 0.1 }}
      href={i.link}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={i.name}
    >
      <div className="w-full h-full relative overflow-hidden flex group rounded-2xl md:rounded-3xl">
        <div className="absolute top-1.5 left-0.5 lg:left-1 flex gap-2 items-center z-10 justify-between w-[98%] pl-1">
          <motion.div
            initial={
              isTabletOrMobile
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: "-50px" }
            }
            {...(!isTabletOrMobile && {
              animate: { opacity: hover ? 1 : 0, y: hover ? "0px" : "-50px" },
            })}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className=" bg-white py-1 lg:py-1.5 text-sm font-medium tracking-wider px-3 rounded-full shadow-xl"
          >
            <div>{i.name}</div>
          </motion.div>
          <motion.div
            initial={
              isTabletOrMobile
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: "-50px" }
            }
            {...(!isTabletOrMobile && {
              animate: { opacity: hover ? 1 : 0, y: hover ? "0px" : "-50px" },
            })}
            transition={{
              duration: 0.3,
              delay: 0.13,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            <div className=" bg-white hover:scale-95 transition-all duration-300 p-1 lg:p-1.5 cursor-pointer group rounded-full shadow-xl hover:shadow-transparent">
              <div className=" group-hover:scale-110 transition-all duration-300 text-black bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="h-full w-full relative">
          <div
            className={`absolute transition-all duration-300 inset-0 z-[2] ${hover ? "bg-black/10" : "bg-black/5"
              }`}
          ></div>
          <img
            src={i.image}
            alt={i.name}
            className="w-full h-full object-cover scale-[1.01]"
          />
        </div>
      </div>
    </motion.a>
  );
}

const data = [
  {
    name: "Yourgpt Landing Page",
    image: "/work/ygpt.png",
    link: "https://yourgpt.ai",
  },
  {
    name: "AI Helpdesk",
    image: "/work/helpdesk.png",
    link: "https://help.yourgpt.ai",
  },
  {
    name: "Chatbot Dashboard",
    image: "/work/cb-dashboard.png",
    link: "https://chatbot.yourgpt.ai",
  },
  {
    name: "Intervium",
    image: "/work/intervium.png",
    link: "https://intervium.vercel.app"
  },
  {
    name: "Drifto",
    image: "/work/drifto.png",
    link: "https://drifto.thakurgourav.in",
  },
  {
    name: "Auditions",
    image: "/work/auditions.png",
    link: "https://auditions.com",
  },
];
