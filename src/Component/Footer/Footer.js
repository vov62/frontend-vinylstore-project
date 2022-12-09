import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-body">
            <h5> Information</h5>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#"> Contact Us </a>
              </li>
              <li>
                <a href="#"> Privacy Policy </a>
              </li>
            </ul>
          </div>

          <div className="footer-body">
            <h5>Store</h5>
            <ul>
              <li>
                <a href="#"> Terms and Conditions</a>
              </li>
              <li>
                <a href="#"> Shipping And Payment</a>
              </li>
              <li>
                <a href="#"> Return Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-body social">
            <h5>Follow Us</h5>
            <ul>
              <li className="social-link">
                <Link to="#">
                  <BsFacebook size={25} />
                </Link>
              </li>
              <li className="social-link">
                <Link to="#">
                  <AiFillYoutube size={25} />
                </Link>
              </li>
              <li className="social-link">
                <Link to="#">
                  <AiFillInstagram size={25} />
                </Link>
              </li>
              <li className="social-link">
                <Link to="#">
                  <FaTiktok size={25} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-section">
        <div className="copyright-text">
          <p> &copy; 2022 VovVinyl Store</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
