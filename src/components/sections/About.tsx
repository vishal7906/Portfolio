import ScrollOpacityText from "../ScrollOpacityText";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <div id="about" className=" appContent">
      <SectionHeader
        title="ABOUT ME"
        decoration="01"
        className=" pt-20 md:pt-32"
      />
      <div className="pt-10 md:pt-20 text-2xl sm:text-3xl md:text-4xl font-bold space-y-6 ">
        <ScrollOpacityText
          type="word"
          className="leading-8 sm:leading-12 font-semibold"
          text="Hey, I’m Vishal, a software developer with 2 years of experience. I craft sleek, high-performing interfaces and sprinkle in some UI/UX magic to make them shine. Beyond just looking good, I focus on engineering highly stable, scalable, and resilient products that stand the test of time. When I’m not coding, I’m either tweaking my portfolio (again), pushing pixels in Figma, or pretending I don’t have 37 open tabs. Let’s build something awesome!"
        />
        {/* <div className={commClass}>
          Hey, I’m Vishal, a frontend developer with 2 years of experience,
          turning coffee into clean, pixel-perfect code. I work with React,
          Next.js, React Native, TypeScript, Tailwind, and Framer
          Motion—basically, if it’s on the frontend, I’ve probably styled it,
          animated it, or debugged it at 2 AM.
        </div>
        <div className={commClass}>
          I also dabble in UI/UX, because a great app isn’t just about code—it
          needs to look good too. When I’m not coding, I’m probably tweaking my
          portfolio for the 100th time or pretending I don’t have 37 open tabs.
          Let’s build something awesome!
        </div> */}
      </div>
    </div>
  );
}

// const commClass = "leading-[130%]";
