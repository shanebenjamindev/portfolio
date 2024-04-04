import React from "react";
import { Link } from "react-router-dom";

export default function DownloadCV() {
  return (
    <Link to="https://drive.usercontent.google.com/download?id=1Xb4E1wxkq2zeEZaxBCPA4uwuRutjxIky&export=download&authuser=1&confirm=t&uuid=8e4226c3-5106-479b-a363-865ddcfbec04&at=APZUnTUg5OxxIkaHlpuMS17xt3b8:1712224487486">
      <button className="btn__Primary">Download CV</button>
    </Link>
  );
}
