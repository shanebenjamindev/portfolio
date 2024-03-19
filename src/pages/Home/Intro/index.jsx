import { ContactModal } from "../../../components/Header";
import "./intro.css";
import avatar from "/images/avatar.jpg";

export default function Intro() {
  return (
    <section id="section__Intro">
      <div className="d-md-flex h-100">
        <div className="col-6 mb-5 d-md-flex align-items-center">
          <div className="col-md-4  d-md-flex justify-content-center ">
            <img src={avatar} height={"300px"} />
          </div>
          <div className="col-md-8">
            <h2>Website Designer / FrontEnd Developer</h2>
            <h3>
              Hello, My name is Giang (Benjamin) <br />
            </h3>
            <p>
              With over 1 year experience in both front-end and back-end web
              development, my objective is to leverage to contribute effectively
              to your team, I am eager to continue my professional growth
              journey within your esteemed organization.
            </p>
            <div>
              <ContactModal />
            </div>
          </div>
        </div>

        <div className="col-md-6"></div>
      </div>
    </section>
  );
}
