import { useState, useEffect } from "react";
import Intro from "./Intro";
import "./home.css";
import Skills from "./Skills";
import Expericences from "./Experiences";
import Hero from "./Hero";

export default function Home() {
  const [backgroundScale, setBackgroundScale] = useState("");

  const handleScroll = () => {
    const scale = 1 + window.scrollY * 0.009;
    setBackgroundScale(scale);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <div
        className="background"
        style={{
          height: "100dvh",
          transform: `scale(${backgroundScale})`,
          transformOrigin: "center",
        }}
      >
        <Intro />
      </div>

      <div className="content">
        <Hero />
        <Skills />
        <Expericences />
      </div>
    </div>
  );
}
