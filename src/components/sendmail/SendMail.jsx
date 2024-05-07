import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./SendMail.css";

const SendMail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tkig49d", "template_533oxan", form.current, {
        publicKey: "prkoPZEGOTPZ_ENVb",
      })
      .then(
        () => {
          alert("successfully sent");
        },
        (error) => {
          alert("FAILED...");
          console.log(error);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} className="form_box" onSubmit={sendEmail}>
      <div className="name_box field">
        <i className="fa-regular fa-user"></i>
        <input type="text" placeholder="Full name" name="user_name" required />
      </div>
      <div className="email_box field">
        <i className="fa-regular fa-envelope"></i>

        <input
          type="email"
          placeholder="Your Email"
          name="user_email"
          required
        />
      </div>
      <div className="subject_box field">
        <i className="fa-regular fa-circle-question"></i>

        <input type="text" placeholder="subject" name="subject" required />
      </div>
      <div className="textarea_box field">
        <i className="fa-regular fa-pen-to-square"></i>
        <textarea name="message" placeholder="How may we help you?"></textarea>
      </div>
      <button type="submit" className="submitBt">
        send message
        <i className="fa-regular fa-paper-plane"></i>
      </button>
    </form>
  );
};

export default SendMail;
