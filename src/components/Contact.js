import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../ThemeContext";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const { isDarkMode } = useTheme();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k4svi0j",
        "template_ddz6cgo",
        form.current,
        "potP2N01quZvTcNkp"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Message failed to send. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
              <i className="fas fa-user"></i>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                required
              />
              <i className="fas fa-envelope"></i>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <i className="fas fa-tag"></i>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
              <i className="fas fa-pencil-alt"></i>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;