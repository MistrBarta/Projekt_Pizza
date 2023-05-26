import React from "react";
import "../Styles/Footer.css"
import img from "../Img/Footer-img.png";
import { FaFacebook, FaInstagram, FaSteam, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
      <footer className="footer">
        <div className="footer-content">
          <p>Majitel: Truhlářová Tereza</p>
          <p>Kuchař: Bárta Adam</p>
          <p>Rozvoz: Hovorka Ondřej</p>
          <p>E-mail: papa-joy@gmail.com</p>
          <p>Kontakt: +420 123 456 789</p>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/ondra.hovorka.77" target="blank" rel="noopener"><FaFacebook size="20px" color="black" className="footer-social-img" /></a>
          <a href="https://www.instagram.com/teriinaa.teriinaa/" target="blank" rel="noopener">< FaInstagram size="20px" color="black" className="footer-social-img" /></a>
          <a href="https://store.steampowered.com/" target="blank" rel="noopener"><FaSteam size="20px" color="black" className="footer-social-img" /></a>
          <a href="https://www.youtube.com/@LadislavSchejbal" target="blank" rel="noopener"><FaYoutube size="20px" color="black" className="footer-social-img" /></a>
        </div>
        <div className="footer-content-img">
          <img className="footer-img" src={img} width="320px" height="200px" alt=""/>
        </div>
      </footer>
  );
}

export default Footer;
