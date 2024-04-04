import DownloadCV from "../../../components/DownloadCV";
import { ContactModal } from "../../../components/Header";
import "./intro.css";

export default function Intro() {
  return (
    <section id="section__Intro">
      <div className="">
        <div className="col-md-6">
          <div className="">
            <h1>
              Hello, my name is Giang <br />
            </h1>
            <h4>Website Designer / FrontEnd Developer</h4>
            <p>
              With over 1 year experience web development, my objective is
              contribute effectively to your team, I am eager to continue my
              professional growth journey within your esteemed organization.
            </p>
            <div className="mt-2 d-flex" style={{gap: "10px"}}>
              <ContactModal />
              <DownloadCV />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
