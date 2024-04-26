import { BrowserRouter as Router, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = ({contactInfo}) => {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <footer className="main-footer rel z-1">
      <div className="footer-top-wrap bgc-black pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-12">
              <div className="footer-widget widget_logo wow fadeInUp delay-0-2s">
                <div className="footer-logo">
                  <Link to="/">
                    <img src="assets/images/logos/logo.png" alt="Logo" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                <h6 className="footer-title">Quick Link</h6>
                <ul>
                  <li>
                    <Link to="/">Service</Link>
                  </li>
                  <li>
                    <Link to="/">Projects</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-widget widget_newsletter wow fadeInUp delay-0-4s">
                <form action="#">
                  <label htmlFor="email-address">
                    <i className="far fa-envelope" />
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    placeholder="Email Address"
                    required=""
                  />
                  <button>
                    Sign Up <i className="far fa-angle-right" />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div className="footer-widget widget_contact_info wow fadeInUp delay-0-6s">
                <h6 className="footer-title">Address</h6>
                <ul>
                  <li>
                    <i className="far fa-map-marker-alt" />{contactInfo.address}
                  </li>
                  <li>
                    <i className="far fa-envelope" />{" "}
                    <a href="mailto:support@gmail.com">{contactInfo.contactEmail}</a>
                  </li>
                  <li>
                    <i className="far fa-phone" />{" "}
                    <a href="tel:+880(123)45688">+880 (123) 456 88</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-20 pb-5 rpt-25">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>
                  Copyright @{date},{" "}
                  <Link to="/">------</Link> All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <a href="#" className="scroll-top scroll-to-target d-inline-block">
            <span className="fas fa-angle-double-up" />
          </a>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
