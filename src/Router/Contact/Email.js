import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import { EmailJs } from "../../emailJs";
import "../../style/email.css";

const SERVICE_ID = EmailJs.service_id;
const TEMPLATE_ID = EmailJs.template_id;
const USER_ID = EmailJs.user_id;

const Email = () => {
  const handleOnSubmit = e => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      result => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      error => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <>
      <Form onSubmit={handleOnSubmit} className="mail-container">
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Write your email..."
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Write your name or group..."
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Input your message…"
          required
        />
        <Button type="submit" className="mail-send">
          send
        </Button>
      </Form>
    </>
  );
};

export default Email;
