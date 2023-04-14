import React from "react";
import "./contact.css";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
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
            <p>Send a message</p>
          </div>
          <div>
            <i>
              <FaWhatsapp />
            </i>
            <h4>Whatsapp</h4>

            <label typeof="number">+917348905772</label>
            <p>Send a message</p>
          </div>
        </div>
        <div className="message_area">
          <input type="text" placeholder="Your Full Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Message" />
          <div>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
