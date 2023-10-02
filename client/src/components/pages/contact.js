import React from "react";
import Sidebar from "../sidebar/sidebar";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <Sidebar />
      <div className="contact">Contact Us</div>
      <p className="contact-para">We would love to hear from you.</p>
      <div className="contact-form">
        <form>
          <input
            name="name"
            spellCheck="false"
            className="control"
            type="text"
            placeholder="Name"
          />
          <input
            name="email"
            spellCheck="false"
            className="control"
            type="text"
            placeholder="Email"
          />
          <input
            name="subject"
            spellCheck="false"
            className="control"
            type="text"
            placeholder="Subject"
          />
          <input
            name="body"
            spellCheck="false"
            className="control-body"
            type="text-box"
            placeholder="Body"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
