// Styles:
import "./Footer.css";
// Icons:
import { BsLinkedin, BsGithub, BsTwitter,BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo footer__link-item">Web Developer Le Anh Linh</a>

      <ul className="footer__links">
        <li><a href="#" className="footer__link-item">Home</a></li>
        <li><a href="#about" className="footer__link-item">About Me</a></li>
        <li><a href="#experience" className="footer__link-item">My Experience</a></li>
        <li><a href="#portfolio" className="footer__link-item">Portfolio</a></li>
        <li><a href="#contact" className="footer__link-item">Contact Me</a></li>
      </ul>

      <div className="footer__socialmedia">
        <a href="https://www.linkedin.com/in/linh-anh-4b4b6811b/" className="footer__link-item footer__sm" rel="noreferrer" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/leanhlinh0108" className="footer__link-item footer__sm" rel="noreferrer" target="_blank"><BsGithub /></a>
        <a href="https://www.facebook.com/iamlinh0108/" className="footer__link-item footer__sm" rel="noreferrer" target="_blank"><BsFacebook /></a>
        <a href="https://www.instagram.com/iamlinhhh_01/" className="footer__link-item footer__sm" rel="noreferrer" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Le Anh Linh, {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};

export default Footer;