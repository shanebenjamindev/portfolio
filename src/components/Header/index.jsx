import { Link } from "react-router-dom"

export default function Header() {
    return (
        <Navbar />
    )
}

function Navbar() {
    return (
        <nav className="w-75 mx-auto mt-1 bg-white rounded-lg admin__Navbar navbar navbar-expand-lg navbar-light fixed-top">
            <Link className="navbar-brand d-flex justify-content-center align-items-center" to="/">
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
                <div className=" overlay-hidden"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContentAdmin"
                    aria-controls="navbarSupportedContentAdmin"
                    aria-expanded="false"
                    aria-label="Toggle navigation" >
                </div>

                <ul className="navbar-nav ml-auto main__p">
                    <li className="nav-item">
                        <Link className="nav-link d-flex flex-column align-items-center justify-content-center" >
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/certificate">
                            Certificate
                        </Link>
                    </li>
                    <li className="nav-item">
                        <button
                            className="btn btn-dark"
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}