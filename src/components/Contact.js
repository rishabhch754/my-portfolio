import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k4svi0j", // EmailJS service ID
        "template_ddz6cgo", // template ID
        form.current,
        "potP2N01quZvTcNkp"   // public key
      )
      .then(
        () => {
          alert(" Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert(" Message failed to send. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div id="Contact">
      <div className="Contact">
        <h2 className="heading">Contact Me</h2>
        <p className="intro-text">
          I’m passionate about building impactful solutions and open to meaningful collaborations.
          Feel free to get in touch!
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Enter Your Full Name" required />
          <input type="email" name="email" placeholder="Enter Your Email" required />
          <input type="text" name="subject" placeholder="Enter the Subject" required />
          <textarea name="message" rows="4" placeholder="Write your message here..." required />
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
