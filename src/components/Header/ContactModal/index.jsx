import { useState } from 'react';
import { Modal, Button, Input, Form } from 'antd';
import { MailOutlined } from '@ant-design/icons';

export default function ContactModal() {
    const [visible, setVisible] = useState(false);
  
    const showModal = () => {
      setVisible(true);
    };
  
    const handleOk = () => {
      // Implement your logic to send the email here
      // You can use libraries like nodemailer or an API for sending emails
      // For the sake of this example, we'll just close the modal
      setVisible(false);
    };
  
    const handleCancel = () => {
      setVisible(false);
    };
  
    return (
      <div>
        <Button type="primary" onClick={showModal}>
          Contact
        </Button>
        <Modal
          title="Contact"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form layout="vertical">
            <Form.Item
              label="Email address"
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
  