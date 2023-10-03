import { Link } from "react-router-dom";
import './projects.css';
import airbnbProjects from '../../../../public/images/airbnbProjects.jpeg';


export default function Projects() {
    return (
        <section id="section__Projects" className="text-center py-5">
            <h1> Projects</h1>
            <div>
                <p>
                    personal project
                </p>
            </div>
            <div className="projects__Content d-md-flex justify-content-center" data-aos="fade-right" data-aos-duration="500" >
                <Link to="https://samar-one.vercel.app/" className="col-md-3  projects__Item">
                    <div className="custom-card-inner">
                        <div className="overlay"></div>
                        <img className="custom-card-img"
                            width="100%" height="300"
                            src="https://react-portfolio-ochre-theta.vercel.app/static/media/5.c90ac185a085261953af.bmp" />
                        <div className="custom-card-details">
                            <h4>Capstone SAMAR</h4>
                            <p>HTML, CSS, Bootstrap, jQuery, CSS Animation</p>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <h4>March 2023</h4>
                    </div>
                </Link>

                <div></div>
                <Link to="https://capstone-project-sooty-gamma.vercel.app/" className="col-md-3  projects__Item">
                    <div className="custom-card-inner">
                        <div className="overlay"></div>
                        <img className="custom-card-img"
                            width="100%" height="300"
                            src="https://react-portfolio-ochre-theta.vercel.app/static/media/1.da70e44d91c88ece61df.png" />
                        <div className="custom-card-details">
                            <h4>Capstone Restaurant</h4>
                            <p>HTML, CSS, Bootstrap, jQuery, CSS Animation, Responsive</p>
                        </div>
                    </div>
                    <div>
                        <h4>April 2023</h4>
                    </div>
                </Link>

                <Link to="https://capstone-api-jade.vercel.app/" className="col-md-3  projects__Item">
                    <div className="custom-card-inner">
                        <div className="overlay"></div>
                        <img className="custom-card-img"
                            width="100%" height="300"
                            src="https://react-portfolio-ochre-theta.vercel.app/static/media/projectApi.fc3499676d1d6a829653.jpeg" />
                        <div className="custom-card-details">
                            <h4>Capstone Cart Store</h4>
                            <p>JavaScript, MockAPI, LocalStorage</p>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <h4>April 2023</h4>
                    </div>
                </Link>

                <Link className="col-md-3 projects__Item" to="https://capstone-airbnb-one.vercel.app/">
                    <div className="custom-card-inner">
                        <div className="overlay"></div>
                        <img className="custom-card-img"
                            width="100%" height="300"
                            src={airbnbProjects} />
                        <div className="custom-card-details">
                            <h4>Capstone Airbnb</h4>
                            <p>Restful API ,Auth, CRUD, LocalStorage, Reactjs (redux--toolkit, react-router-dom,...)</p>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <h4>October 2023</h4>
                    </div>
                </Link>
            </div>
        </section>
    )
}
