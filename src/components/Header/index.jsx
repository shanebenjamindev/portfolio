import { Link } from "react-router-dom";

import "./style.css";
import { ContactModal } from "../ContactModal/ContactModal";
export default function Header() {
  return <Navbar />;
}

function Navbar() {
  return (
    <nav className="px-3 bg-white fixed-top">
      <div className="navbar navbar-expand-lg navbar-light">
        <Link
          className="navbar-brand d-flex justify-content-center align-items-center"
          to="/"
        >
          <img
            width="30px"
            src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-portfolio-icon-png-image_4171290.jpg"
            alt=""
          />
          <div className="main__Title ml-2">Portfolio</div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContentAdmin"
          aria-controls="navbarSupportedContentAdmin"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContentAdmin"
        >
          <div
            className=" overlay-hidden"
            data-toggle="collapse"
            data-target="#navbarSupportedContentAdmin"
            aria-controls="navbarSupportedContentAdmin"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></div>

          <ul className="navbar-nav w-100 justify-content-center">
            <li className="nav-item">
              <a
                href="#section__Intro"
                className="nav-link d-flex flex-column align-items-center justify-content-center"
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#section__Info"
                className="nav-link d-flex flex-column align-items-center justify-content-center"
              >
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#section__Experience">
                Experiences
              </a>
            </li>
            {/* <li className="nav-item"> */}
            {/* <Link to="/adm" className="nav-link" href="#section__Experience">
                Login
              </Link> */}
            {/* </li> */}
          </ul>
        </div>
        <ContactModal />
      </div>
    </nav>
  );
}
