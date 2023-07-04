// CV file:
import CV from "../../assets/pdf/CV_LE_ANH_LINH.pdf";

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <a href={CV} className="btn" download>Download CV</a>
      <a href="#contact" className="btn btn-primary">Contact me</a>
    </div>
  );
};

export default CallToAction;