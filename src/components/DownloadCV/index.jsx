import React from "react";
import { Link } from "react-router-dom";

export default function DownloadCV() {
  return (
    <Link to="https://drive.usercontent.google.com/download?id=1bkuv2-M1ORz6Gj7qLXcM1DUSUUbRsZJH&export=download&authuser=1&confirm=t&uuid=939e9c82-1455-41c5-8a8b-6d69944bf61e&at=APZUnTXqDekvyDZeW0R_UT9ONThS:1712300620161">
      <button className="btn__Primary">Download CV</button>
    </Link>
  );
}
