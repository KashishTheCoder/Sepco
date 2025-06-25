import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          {/* Left: Links */}
          <div className="footer-links">
            <div className="link-column">
              <h4>Company</h4>
              <ul>
                <li>Home</li>
                <li>About SEPCO</li>
                <li>CEO SEPCO</li>
                <li>Board of Directors</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="link-column">
              <h4>Services</h4>
              <ul>
                <li>Online Payroll</li>
                <li>Entry Form</li>
                <li>Phone Directory</li>
                <li>Policies</li>
                <li>Templates</li>
              </ul>
            </div>

            <div className="link-column">
              <h4>Quick Links</h4>
              <ul>
                <li>Dashboard</li>
                <li>MIS Website</li>
                <li>Old Website</li>
                <li>Webmail</li>
                <li>Legislation</li>
              </ul>
            </div>
          </div>

          {/* Right: Map and Socials */}
          <div className="footer-map-social">
            <div className="map">
              <iframe
                title="SEPCO Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28960.86519548149!2d68.8370461217904!3d27.704323925676944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935e2d517e0fcd9%3A0x16fe4a1f19f4e912!2sSEPCO%20Headquarters!5e0!3m2!1sen!2s!4v1689073462383!5m2!1sen!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="social-icons">
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt="Twitter"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 <span>SEPCO</span> | Designed & Developed by{" "}
            <span>PITC</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
