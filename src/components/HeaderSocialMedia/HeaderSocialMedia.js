// Icons:
import { BsGithub, FaInstagram,BsFacebook,BsLinkedin, BsTwitter } from "react-icons/bs";

const HeaderSocialMedia = () => {
  return (
    <div className="header__socialmedia">
      <a href="https://www.facebook.com/iamlinh0108/" rel="noreferrer" target="_blank"><BsFacebook /></a>
      <a href="https://www.instagram.com/iamlinhhh_01/" rel="noreferrer" target="_blank"> <i class="fa-brands fa-instagram"></i></a>
      <a href="https://github.com/leanhlinh0108" rel="noreferrer" target="_blank"><BsGithub /></a>
      <a href="https://www.linkedin.com/in/linh-anh-4b4b6811b/" rel="noreferrer" target="_blank"><BsLinkedin /></a>
    </div>
  );
};

export default HeaderSocialMedia;