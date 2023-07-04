// Styles:
import "./AboutMe.css";
// Image:
import MyPhoto from "../../assets/images/z4094330969425_48227be4397af08f07a6522dc278d208.png";
// Icons:
import { BsAward } from "react-icons/bs";
// import { FiUsers } from "react-icons/fi";
// import { TbFolders } from "react-icons/tb";

const AboutMe = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me--image">
            <img className="Myphoto"
              src={MyPhoto}
              alt="Frontend web developer Le Anh Linh"
            />
          </div>
        </div>
        <div className="about__content">
          <p>
            4th-year student at Duy Tan University.I've had training in
            management, organization and knowledge of software engineering.s, I
            have been consistently engaged in self-study and attending various
            training programs.A hardworking person and ambitious individual
            with a great passion for front-end development and UI/UX design. I'm
            searching for a new opportunity to contribute and improve my
            skills.
          </p>
          <p>
            I'm very fond of web development cause it makes me feel my ability
            of creating something new. This is a profession that holds the
            future and it provides great possibilities for my personal and
            professional growth. My love and ability to learn and gain new
            knowledge and new skills, my life experience, my soft skills are
            leading me through the path of becoming a successful web developer.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
