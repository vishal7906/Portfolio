import { useEffect, useState } from "react";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import LenisWrapper from "./components/LenisWrapper";
import LoadScreen from "./components/LoadScreen";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Nav from "./components/sections/Nav";
import About from "./components/sections/About";
import Blogs from "./components/sections/Blogs";

function App() {
  const [end, setEnd] = useState(false);
  const [loaderAnimComplete, setLoaderAnimComplete] = useState(false);

  useEffect(() => {
    if (!end) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [end]);

  function handleChangeEnd(b: boolean) {
    setEnd(b);
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (!end) {
      timer = setTimeout(() => {
        handleChangeEnd(true);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [end]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, []);

  return (
    <div>
      {!loaderAnimComplete && (
        <LoadScreen
          end={end}
          unMountLoader={() => {
            setLoaderAnimComplete(true);
          }}
        />
      )}

      <LenisWrapper end={end}>
        <div id="home" />
        <Nav />
        <Hero end={end} />
        <About />
        <Projects />
        <Skills />
        <Blogs />
        <Footer />
      </LenisWrapper>
    </div>
  );
}

export default App;
