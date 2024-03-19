import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Modal, Input, Form } from "antd";
import { MailOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com"; // updated import for emailjs
import "./style.css";
export default function Header() {
  return <Navbar />;
}

function Navbar() {
  return (
    <nav className="px-5 bg-white fixed-top">
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
              <a href="#section__Skills" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section__Experience">
                Experiences
              </a>
            </li>
          </ul>
        </div>
        <ContactModal />
      </div>
    </nav>
  );
}

export function ContactModal() {
  const form = useRef();

  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const [visible, setVisible] = useState(false);

  const handleOk = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zfrjend",
        "template_q6r0u9r",
        form.current,
        "Upxiat5EO1yLQlRQX"
      )
      .then(
        (result) => {
          setSubmitMessage("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          setSubmitMessage("Error sending message. Please try again later.");
          console.log(error.text);
        }
      );
  };
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <button className="btn btn-dark header__Btn-Hire" onClick={showModal}>
        <span>Hire me</span>
      </button>
      <Modal
        title="HIRE ME"
        open={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <form ref={form} onSubmit={handleOk}>
          <div className="form-group">
            <input
              className="form-control"
              name="name"
              data-aos="fade-right"
              data-aos-delay="500"
              type="text"
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              name="email"
              type="email"
              data-aos="fade-right"
              data-aos-delay="600"
              className="form-control"
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              data-aos="fade-right"
              data-aos-delay="700"
              rows={6}
              onChange={handleChange}
              placeholder="Message"
              required
            />
          </div>

          <div
            className="text-center my-2"
            data-aos="fade"
            data-aos-delay="900"
          >
            <button className="btn btn-dark px-4 py-2" type="submit">
              GET IN TOUCH
            </button>
          </div>
          {submitMessage && (
            <p className="text-center">
              {submitMessage}, Thanks for choosing me
            </p>
          )}
        </form>
      </Modal>
    </div>
  );
}
