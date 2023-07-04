// Styles:
import "./Portfolio.css";
// Images:
import ReactQuizHour from "../../assets/images/qqqqrr.png";
import ReactBookingTravel from "../../assets/images/ttttttt.png";
import VietNhatSchool from "../../assets/images/adsdd.png";
import EnglishTest from "../../assets/images/cccccccc.png";

const portfolioItems = [
  {
    id: 1,
    image: ReactQuizHour,
    title: "React QuizHour",
    githubLink: "",
    watchLiveLink: "https://www.figma.com/file/DEL77IPvMYvWklSTcAVPq3/Untitled?type=design&node-id=101-651&mode=design&t=vXRVOFnhe6POFzSK-0"
  },
  {
    id: 2,
    image: ReactBookingTravel,
    title: "React Booking Travel",
    githubLink: "",
    watchLiveLink: ""
  },
  {
    id: 3,
    image: VietNhatSchool,
    title: "VietNhat School",
    githubLink: "",
    watchLiveLink: "http://quantrimamnontest.cncstone.vn/website-trang-chu"
  },
  {
    id: 4,
    image: EnglishTest,
    title: "English Test For Kid",
    githubLink: "",
    watchLiveLink: "http://quantrimamnontest.cncstone.vn/danh-muc-hoc-tap"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        { portfolioItems.map(item => (
          <article className="portfolio__item" key={item.id}>
          <div className="portfolio__item--image">
            <img src={item.image} alt={item.title} />
          </div>
          <h3 className="portfolio__item--heading">{item.title}</h3>
          <div className="portfolio__item--call-to-action">
            <a className="btn" href={item.githubLink} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn btn-primary" href={item.watchLiveLink} target="_blank" rel="noreferrer">Watch Live</a>
          </div>
        </article>
        )) }
      </div>
    </section>
  );
};

export default Portfolio;