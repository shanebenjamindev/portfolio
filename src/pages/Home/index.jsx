import { useState, useEffect } from "react";
import Intro from "./Intro";
import "./home.css";
import Skills from "./Skills";
import Expericences from "./Experiences";

export default function Home() {
  const [backgroundScale, setBackgroundScale] = useState("");

  const handleScroll = () => {
    const scale = 1 + window.scrollY * 0.005;
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
          transform: `scale(${backgroundScale})`,
          transformOrigin: "center",
        }}
      >
        <Intro />
      </div>

      <div className="content ">
        <div className="w-75 m-auto">
          <Skills />
          <Expericences />
        </div>
      </div>
    </div>
  );
}
