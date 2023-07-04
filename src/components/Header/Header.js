// Components:
import CallToAction from "../CallToAction/CallToAction";
import HeaderSocialMedia from "../HeaderSocialMedia/HeaderSocialMedia";
// Styles:
import "./Header.css";
// Image:
import MyPhoto from "../../assets/images/z4094330969425_48227be4397af08f07a6522dc278d208.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello!</h5>
        <h1>Wellcome To My Personal Portfolio </h1>
        <h2>Le Anh Linh</h2>
        <h5 className="text-light">Frontend Web Developer</h5>
        <CallToAction />
        <HeaderSocialMedia />

        <div className="my-photo">
          <img src={MyPhoto} alt="Frontend Web Developer Le Anh Linh" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
