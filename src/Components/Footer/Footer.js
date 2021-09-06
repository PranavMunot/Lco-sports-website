import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="footer">
      <div className="row row-sm footer-section">
        <div className="col-1-2 footer-navigation">
          <h1 className="footer-navigation-heading">Website Navigation</h1>
          <ul className="footer-navigation-list">
            <li className="footer-navigation-item">
              <a className="footer-navigation-link" href="#home">
                Home
              </a>
            </li>
            <li className="footer-navigation-item">
              <a className="footer-navigation-link" href="#about">
                About Us
              </a>
            </li>
            <li className="footer-navigation-item">
              <a className="footer-navigation-link" href="#team">
                Team
              </a>
            </li>
            <li className="footer-navigation-item">
              <a className="footer-navigation-link" href="#tournament">
                Tournament
              </a>
            </li>
          </ul>
        </div>
        <div className="col-1-2 footer-address">
          <h3 className="footer-address-heading">
            LCO Basketball Ground,
            <br />
            55 - Fictional Homes,
            <br /> Fictional Road Near Fictional Lake.
            <br /> India
          </h3>
          <p className="footer-para">
            <a
              className="footer-para-link"
              href="mailto:pranavmunot09@gmail.com"
            >
              Email: pranavmunot09@gmail.com
            </a>
          </p>
          <p className="footer-para">
            <a className="footer-para-link" href="tel:+918669171507">
              Call Creator
            </a>
          </p>
        </div>
        <div className="col-1-2 social">
          <a className="social-link" href="https://github.com/PranavMunot">
            <AiFillGithub className="social-icon" />
          </a>
          <a
            className="social-link"
            href="https://www.instagram.com/__pranavmunot__/"
          >
            <AiFillInstagram className="social-icon" />
          </a>
          <a className="social-link" href="https://twitter.com">
            <AiFillTwitterCircle className="social-icon" />
          </a>
          <a className="social-link" href="https://wa.me/+918669171507">
            <RiWhatsappFill className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
