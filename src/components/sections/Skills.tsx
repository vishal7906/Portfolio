import SnappyButton from "../SnappyButton";
import SectionHeader from "./SectionHeader";
import { motion } from "motion/react";

export default function Skills() {
  return (
    <div id="skills" className="appContent">
      <SectionHeader
        title="SKILLS-N-TOOLS"
        decoration="03"
        className="pt-20 md:pt-32"
      />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 pt-10 md:pt-20"> */}
      <div className="pt-10 md:pt-10 px-5 md:px-10 lg:px-32">
        <div>
          {/* <div className="text-center font-bold tracking-wider uppercase">
            Skills
          </div> */}
          <div className="flex gap-4 items-center flex-wrap py-10 px-0 lg:px-10 justify-center ">
            {SKILLS.map((i) => {
              return (
                <SnappyButton key={i}>
                  <Item key={i} text={i} />
                </SnappyButton>
              );
            })}
            <SnappyButton>
              <Item text="more +" />
            </SnappyButton>
          </div>
        </div>
        {/* <div>
          <div className="text-center font-bold tracking-wider uppercase">
            Tools
          </div>
          <motion.div
            transition={{ staggerChildren: 1 }}
            className="flex gap-4 items-center flex-wrap py-10 px-0 lg:px-10 justify-center "
          >
            {TOOLS.map((i) => {
              return (
                <SnappyButton key={i}>
                  <Item key={i} text={i} />
                </SnappyButton>
              );
            })}
          </motion.div>
        </div> */}
      </div>
    </div>
  );
}

function Item({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: 20 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.5 }}
      className="text-center tracking-wider text-sm md:text-base rounded-lg px-4 py-1 ring-2 ring-offset-2 ring-offset-white bg-black/10 ring-black/10"
    >
      {text}
    </motion.div>
  );
}

const SKILLS = [
  "React.js",
  "Next.js",
  "Node.js",
  "React Native",
  "Redux",
  "Zustand",
  "TypeScript",
  "Tailwind CSS",
  "Scss",
  "Framer Motion",
  "GSAP",
  "Socket.IO",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  // "AI Prompting",
  "REST API Integration",
  "Github",
  "Git",
  "Vercel",
  // "Cursor",
  "Figma",
];

// const TOOLS = ["Github", "Git", "Vercel", "Cursor", "Figma"];
