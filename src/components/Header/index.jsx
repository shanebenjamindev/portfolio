import { Link } from "react-router-dom"

import { useState } from 'react';
import { Modal, Input, Form } from 'antd';
import { MailOutlined } from '@ant-design/icons';

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
                            CV
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/certificate">
                            Certificate
                        </Link>
                    </li>
                    <li className="nav-item">
                        <ContactModal />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

function ContactModal() {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        // Implement your logic to send the email here
        // You can use libraries like nodemailer or an API for sending emails
        // For the sake of this example, we'll just close the modal
        alert(`thanks for choosing me but this button not work yet... please, contact me via phone 0834718218 or email vophonggiang0205@gmail.com`)
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <div>
            <button className="btn btn-dark" onClick={showModal}>
                Contact
            </button>
            <Modal
                title="Contact"
                open={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={<>
                    <button onClick={handleOk} className="btn btn-dark">send</button>
                </>}
            >
                <Form layout="vertical">
                    <Form.Item
                        label="Your email address"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your email address',
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined />} placeholder="Enter email" />
                    </Form.Item>
                    <Form.Item
                        label="Message"
                        name="message"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your message',
                            },
                        ]}
                    >
                        <Input.TextArea rows={4} placeholder="Enter your message" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
