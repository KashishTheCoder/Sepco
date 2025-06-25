import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-links">
          <div className="link-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About SEPCO</a></li>
              <li><a href="/ceo">CEO SEPCO</a></li>
              <li><a href="/directors">Board of Directors</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="link-column">
            <h4>Services</h4>
            <ul>
              <li><a href="/mis">MIS Website</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/old">Old Website</a></li>
              <li><a href="/webmail">Webmail</a></li>
              <li><a href="/templates">Templates/Forms</a></li>
            </ul>
          </div>

          <div className="link-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="/policies">Policies</a></li>
              <li><a href="/payroll">SEPCO Online Payroll</a></li>
              <li><a href="/payroll-entry">Payroll Entry Form</a></li>
              <li><a href="/directory">Phone Directory</a></li>
              <li><a href="/laws">Legislation</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-map-social">
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>

          <div className="map">
            <iframe
              title="sepco-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.2630311952635!2d68.84525991508347!3d27.716745032584797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935e3cb0d5aab43%3A0xf26382c3a1bcf44c!2sSEPCO%20Headquarters!5e0!3m2!1sen!2s!4v1631951059500!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 SEPCO | Designed & developed by <a href="https://pitc.com.pk">PITC</a></p>
      </div>
    </footer>
  );
};

export default Footer;
