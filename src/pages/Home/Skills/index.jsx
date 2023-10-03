import './skills.css';
import { FaReact, FaHtml5, FaSass, FaCss3Alt, FaJsSquare, FaPhp, FaBootstrap, FaGithub, FaSourcetree } from "react-icons/fa";
export default function Skills() {
    return (
        <section id="skills" className="py-5">
            <div className="common__Title py-5"><h2>SKILLS</h2></div>
            <div className="d-md-flex">
                <div className="skills__Content col-md-6">
                    <h4>PROGRAMMING LANGUAGES &amp; TOOLS:</h4>
                    <div className="skills__Icons d-md-flex mb-4">

                        <div className="">
                            <div className="icon" data-aos="fade-right" data-aos-anchor-placement="top-center">
                                <FaJsSquare className="icon-js" />
                                <FaReact className="icon-react" />
                                <FaPhp className="icon-php" />
                                <div className="icon__Text">
                                    <p>
                                        Reactjs (redux-toolkit, react-router-dom),
                                        jQuery, RestfulApi, MVC
                                    </p>
                                </div>
                            </div>


                            <div className="icon" data-aos="fade-left" data-aos-anchor-placement="top-center">
                                <FaHtml5 className="icon-html" />
                                <FaCss3Alt className="icon-css" />

                                <FaBootstrap className="icon-bootstrap" />
                                <FaSass className="icon-sass" />
                                Fully Responsive
                            </div>

                            <div>
                                <div className="icon" data-aos="fade-down" data-aos-anchor-placement="top-center">
                                    <FaSourcetree className="icon-sourcetree" />
                                    <FaGithub className="icon-github" />
                                    Version Control
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="col-md-6">

                    <h4>CERTIFICATES:</h4>
                    <div>TOEIC 740</div>
                    <div>Cybersoft FrontEnd Developer 8.4</div>


                </div>
            </div>
        </section>

    )
}
