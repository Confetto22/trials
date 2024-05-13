import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./MemberForm.css";

const MemberForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_41a5tn4", "template_mcpl6oq", form.current, {
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
    <form ref={form} className="form_box member" onSubmit={sendEmail}>
      <div className="name_box field">
        <i className="fa-regular fa-user"></i>
        <input
          type="text"
          placeholder="Full name"
          name="member_name"
          required
        />
      </div>
      <div className="email_box field">
        <i className="fa-regular fa-envelope"></i>

        <input type="email" placeholder="Email" name="member_email" required />
      </div>
      <div className="dob">
        <label htmlFor="member_dob">
          <i className="bx bx-calendar"></i>
          date of birth :
        </label>
        <div className="subject_box field">
          <input
            type="date"
            placeholder="date of birth"
            name="member_dob"
            required
          />
        </div>
      </div>

      <div className="subject_box field">
        <i className="bx bx-phone"></i>

        <input
          type="text"
          placeholder="Phone No."
          name="member_phone"
          required
        />
      </div>

      <div className="subject_box field">
        <i className="bx bx-current-location"></i>

        <input
          type="text"
          placeholder="Address"
          name="member_address"
          required
        />
      </div>

      <div className="subject_box field">
        <i className="fa-regular fa-flag"></i>

        <input
          type="text"
          placeholder="Country"
          name="member_country"
          required
        />
      </div>

      <button type="submit" className="submitBt">
        send message
        <i className="fa-regular fa-paper-plane"></i>
      </button>
    </form>
  );
};

export default MemberForm;
