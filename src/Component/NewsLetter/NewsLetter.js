import React from "react";
import "./newsLetter.css";

const NewsLetter = () => {
  return (
    <div className="NewsLetter">
      <div className="newsText">
        <h4>Sign Up For Newsletters</h4>
        <p>
          Get E-mail updates about our latest shop and{" "}
          <span>special offers.</span>
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your email address" />
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default NewsLetter;
