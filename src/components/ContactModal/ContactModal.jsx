import { useRef, useState } from "react";
import { Modal, Input, Form } from "antd";
import { MailOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com"; // updated import for emailjs

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
    <div className="justify-content-center">
      <button className=" btn__Primary" onClick={showModal}>
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
