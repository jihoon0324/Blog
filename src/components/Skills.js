import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import java from "../assets/img/skills/java.svg";
import html from "../assets/img/skills/html.svg";
import sql from "../assets/img/skills/sql.svg";
import javascript from "../assets/img/skills/javascript.svg";
import react from "../assets/img/skills/react.svg";
import css from "../assets/img/skills/css.svg";
import bootstrap from "../assets/img/skills/bootstrap.svg";
import eclipse from "../assets/img/skills/eclipse.svg";
import netbeans from "../assets/img/skills/netbeans.svg";
import visualStudio from "../assets/img/skills/visualStudio.svg";

import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Frontend Development</h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>Html</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <br></br> <br></br> <br></br> <br></br>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Backend Development</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={java} alt="java" />
                </div>
                <div className="item">
                  <img src={sql} alt="sql" />
                </div>
                <div className="item">
                  <img src={javascript} alt="javascript" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <br></br> <br></br> <br></br> <br></br>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Tools</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={eclipse} alt="eclipse" />
                  <h5>Eclipse</h5>
                </div>
                <div className="item">
                  <img src={netbeans} alt="Image" />
                  <h5>Netbeans</h5>
                </div>

                <div className="item">
                  <img src={visualStudio} alt="Image" />
                  <h5>Visual Studio</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
