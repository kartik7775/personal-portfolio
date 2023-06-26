import React from "react";
import "./contact.css";
import { GoMail } from "react-icons/go";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9j4ww84",
        "template_wba6avk",
        form.current,
        "MMgcwKOvIRb-aCqOB"
      )
      e.target.reset();
      alert("Mail sent successfully.")
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact &nbsp; Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <GoMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dev.kartiknikam@gmail.com</h5>
            <a href="mailto:dev.kartiknikam@gmail.com" target="_blank" rel="noreferrer">
              Send a mail
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 7588107775</h5>
            <a
              href="https://api.whatsapp.com/send?phone=917588107775"
              target="_blank" rel="noreferrer"
            >
              Send a text
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Kartik Nikam</h5>
            <a href="https://www.linkedin.com/in/kartik-nikam/" target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <h3>OR</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            placeholder="Your message: Type here"
            required
            rows="7"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
