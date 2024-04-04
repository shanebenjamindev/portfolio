import { ContactModal } from "../../../components/Header";
import "./skills.css";
import {
  FaReact,
  FaHtml5,
  FaSass,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaBootstrap,
  FaGithub,
  FaSourcetree,
  FaNodeJs,
} from "react-icons/fa";
export default function Skills() {
  return (
    <section id="section__Info" className="w-75 m-auto">
      <div className="py-4 d-md-flex justify-content-center">
        <div
          data-aos="fade-left"
          className="col-md-5 d-flex justify-content-center"
        >
          <img src="/images/avatar.jpg" height={"500px"} />
        </div>
        <div className="d-md-flex col-md-7">
          <div
            className="skills__Content justify-content-center"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            <h2>INFORMATION</h2>

            <p>Full name: Vo Phong Giang</p>
            <p>Phone: 0834718218</p>
            <p>Email: vophonggiang0205@gmail.com</p>
            <h3>PROGRAMMING LANGUAGES:</h3>
            <div className="skills__Icons d-md-flex mb-4">
              <div className="">
                <div
                  className="icon"
                  data-aos="fade-right"
                  data-aos-anchor-placement="top-center"
                >
                  <FaJsSquare className="icon-js" />
                  <FaReact className="icon-react" />
                  <FaNodeJs className="icon-nodejs" />
                  <FaPhp className="icon-php" />
                  <div className="icon__Text">
                    <p>
                      Reactjs (redux-toolkit, react-router-dom), jQuery,
                      RestfulApi, MVC
                    </p>
                  </div>
                </div>
                <div className="icon" data-aos="fade-left">
                  <FaHtml5 className="icon-html" />
                  <FaCss3Alt className="icon-css" />
                  <FaBootstrap className="icon-bootstrap" />
                  <FaSass className="icon-sass" />
                  Fully Responsive
                </div>

                <div>
                  <div className="icon">
                    <FaSourcetree className="icon-sourcetree" />
                    <FaGithub className="icon-github" />
                    Version Control
                  </div>
                </div>
              </div>
            </div>
            <div className="d-md-flex align-items-center">
              <div>
                <h3>CERTIFICATES:</h3>
                <p>TOEIC 740</p>
                <p>Cybersoft FrontEnd Developer 8.4</p>
              </div>
              <div className="ml-5">
                <ContactModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
