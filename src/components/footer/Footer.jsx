import React from "react";
import "../../assets/style/footer.css";
import footer_logo from "../../assets/logo_big.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pintester_icon from "../../assets/pintester_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo-section">
        <div className="footer-logo">
          <img src={footer_logo} alt="Footer Logo" />
          <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="Instagram Icon" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="Pintester Icon" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="Whatsapp Icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
