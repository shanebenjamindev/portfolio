import { Link } from "react-router-dom";
import './projects.css';
import airbnbProjects from '../../../../public/images/airbnbProjects.jpeg';
import oopmanagement from '../../../../public/images/oop-management.jpeg';
import movieProject from '../../../../public/images/movieProject.jpeg';

export default function Projects() {
    return (
        <section id="section__Projects" className="py-5 px-3">
            <div className="text-center">
                <h1> Projects</h1>
                <p>
                    personal project
                </p>
            </div>
            <div className="projects__Content d-md-flex justify-content-center flex-wrap" data-aos="fade-right" data-aos-duration="500" >
                <Link to="https://capstone-airbnb-pg.vercel.app/" className="col-md-4  projects__Item">
                    <div className="custom-card-inner">
                        <div className="overlay"></div>
                        <img className="custom-card-img"
                            width="100%" height="300"
                            src={airbnbProjects} />
                        <div className="custom-card-details">
                            <h4>Capstone Airbnb</h4>
                            <p>Restful API ,Auth, CRUD, LocalStorage, Reactjs (redux--toolkit, react-router-dom, aos...)</p>
                            <p></p>

                            <div className="text-right ">
                                <Link to="https://github.com/vpgiang0205/CapstoneAirBnb" className="btn btn-dark custom-card__ViewBtn">View code</Link>
                            </div>
                        </div>
                    </div>
                    <div className="projects__Datetime">
                        <h4>October 2023 - Airbnb Projects</h4>
                    </div>
                </Link>

                <Link className="col-md-4 projects__Item" to="https://capstone-movie-final.vercel.app/">
                    <div className="custom-card-inner">
                        <div className="overlay"></div>
                        <img className="custom-card-img"
                            width="100%" height="300"
                            src={movieProject} />
                        <div className="custom-card-details">
                            <h4>Capstone Movie</h4>
                            <p>Restful API ,Auth, CRUD, LocalStorage, Reactjs (redux--toolkit, react-router-dom,...)</p>
                            <p></p>

                            <div className="text-right ">
                                <Link to="https://github.com/vpgiang0205/CapstoneMovieFinal" className="btn btn-dark custom-card__ViewBtn">View code</Link>
                            </div>
                        </div>
                    </div>
                    <div className="projects__Datetime">
                        <h4>July 2023 - Movie Project</h4>
                    </div>
                </Link>

                <Link to="https://capstone-project-sooty-gamma.vercel.app/" className="col-md-4  projects__Item">
                    <div className="custom-card-inner">
                        <div className="overlay"></div>
                        <img className="custom-card-img"
                            width="100%" height="300"
                            src="https://react-portfolio-ochre-theta.vercel.app/static/media/1.da70e44d91c88ece61df.png" />
                        <div className="custom-card-details">
                            <div>
                                <h4>Capstone Restaurant</h4>
                                <p>HTML, CSS, Bootstrap, jQuery, CSS Animation, Responsive</p>
                            </div>
                            <div className="text-right ">
                                <Link to="https://github.com/vpgiang0205/CapstoneProject" className="btn btn-dark custom-card__ViewBtn">View code</Link>
                            </div>
                        </div>
                    </div>
                    <div className="projects__Datetime">
                        <h4>April 2023 - Capstone Restaurant</h4>
                    </div>
                </Link>

                <Link to="https://capstone-api-jade.vercel.app/" className="col-md-4  projects__Item">
                    <div className="custom-card-inner">
                        <div className="overlay"></div>
                        <img className="custom-card-img"
                            width="100%" height="300"
                            src="https://react-portfolio-ochre-theta.vercel.app/static/media/projectApi.fc3499676d1d6a829653.jpeg" />
                        <div className="custom-card-details">
                            <h4>Capstone Cart Store</h4>
                            <p>JavaScript, MockAPI, LocalStorage</p>
                            <p></p>

                            <div className="text-right ">
                                <Link to="https://github.com/vpgiang0205/CapstoneAPI" className="btn btn-dark custom-card__ViewBtn">View code</Link>
                            </div>
                        </div>
                    </div>
                    <div className="projects__Datetime">
                        <h4>April 2023 - small Cart</h4>
                    </div>
                </Link>

                <Link to="https://oop-blush.vercel.app/" className="col-md-4  projects__Item">
                    <div className="custom-card-inner">
                        <div className="overlay"></div>
                        <img className="custom-card-img"
                            width="100%" height="300"
                            src={oopmanagement} />
                        <div className="custom-card-details">
                            <h4>OOP Management</h4>
                            <p>HTML, CSS, LocalStorage</p>
                            <p></p>

                            <div className="text-right ">
                                <Link to="https://github.com/vpgiang0205/EmployeeManagement" className="btn btn-dark custom-card__ViewBtn">View code</Link>
                            </div>
                        </div>
                    </div>
                    <div className="projects__Datetime">
                        <h4>March 2023 - OOP Management</h4>
                    </div>
                </Link>

                <Link to="https://samar-one.vercel.app/" className="col-md-4  projects__Item">
                    <div className="custom-card-inner">
                        <div className="overlay"></div>
                        <img className="custom-card-img"
                            width="100%" height="300"
                            src="https://react-portfolio-ochre-theta.vercel.app/static/media/5.c90ac185a085261953af.bmp" />
                        <div className="custom-card-details">
                            <h4>Capstone SAMAR</h4>
                            <p>HTML, CSS, Bootstrap, jQuery, CSS Animation</p>
                            <p></p>

                            <div className="text-right ">
                                <Link to="https://github.com/vpgiang0205/SAMAR" className="btn btn-dark custom-card__ViewBtn">View code</Link>
                            </div>
                        </div>
                    </div>
                    <div className="projects__Datetime">
                        <h4>March 2023 - SAMAR Project</h4>
                    </div>
                </Link>
            </div>
        </section>
    )
}
