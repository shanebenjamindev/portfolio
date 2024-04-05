import React from "react";
import { Link } from "react-router-dom";

export default function DownloadCV() {
  return (
    <Link to="https://drive.usercontent.google.com/download?id=10z7WvEllwd1tfmkpndcjnsPeaF0iL83M&export=download&authuser=1&confirm=t&uuid=069751fc-38e8-4f05-a8c3-0d39bbc37919&at=APZUnTX1QCEJmTgusHtdt-ME162g:1712300348330">
      <button className="btn__Primary">Download CV</button>
    </Link>
  );
}
