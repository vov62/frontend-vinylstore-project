import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-title">
          <h2>Contact Us</h2>
          <p>
            Jot us a note and we’ll get back to you as quickly as possible. If
            you have a problem with your order, please include the Order Number
            listed on your email receipt.
          </p>
        </div>
      </div>

      <div className="form-wrapper">
        <form>
          <label htmlFor="Name">
            Name <span>*</span>
          </label>
          <input type="text" name="Name" placeholder="your name..." required />

          <label htmlFor="Email">
            Email <span>*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="your email..."
            required
          />
          <label htmlFor="order number">Order Number</label>
          <input type="number" name="order number" />
          <label htmlFor="textArea">
            What’s on your mind? <span>*</span>
          </label>
          <textarea cols="30" rows="5" required></textarea>
          <button className="hero-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
