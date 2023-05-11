import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "7348905772";
  const whatsappmessage = "Hello!";
  const emailAddress = "your-email@example.com";
  const emailSubject = "Hello!";
  const [success, setSuccess] = useState("");

  const handleSendMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappmessage
    )}`;
    window.open(url, "_blank");
  };
  const handleSendEmail = () => {
    const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      emailSubject
    )}`;
    window.location.href = emailLink;
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7vdd0nj",
        "template_teeyu4g",
        form.current,
        "7auQDJOUe-9UmGn1S"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Message send success...");
        },
        (error) => {
          console.log(error.text);
          setSuccess("Message send failed...");
        }
      );
  };

  return (
    <div className="contact_wrapper" id="contact">
      <div className="contact_area">
        <h4>Get in Touch</h4>
        <h3>Contact Me</h3>
      </div>
      <div className="contact_field">
        <div className="contact_details">
          <div>
            <i>
              <TfiEmail />
            </i>
            <h4>Email</h4>
            <label typeof="email"> imrohitcoder@gmail.com </label>
            <p onClick={handleSendEmail}>Send a message</p>
          </div>
          <div>
            <i>
              <FaWhatsapp />
            </i>
            <h4>Whatsapp</h4>

            <label typeof="number">+917348905772</label>
            <p onClick={handleSendMessage}>Send a message</p>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="message_area">
            <input type="text" name="user_name" placeholder="Your Full Name" />
            <input type="email" name="user_email" placeholder="Your Email" />
            <input placeholder="Your Message" name="message" />
            <div>
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
