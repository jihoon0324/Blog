import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { PortfolioList } from "./PortfolioList";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  // const ProjectsList = [
  //   // {
  //   //   title: "Business Startup",
  //   //   description: "Design & Development",
  //   //   imgUrl: projImg1,
  //   // },

  //   {
  //     id: 1,
  //     type: "All",
  //     title: "",
  //     language: "JavaScript",

  //     img: require("../assets/img/bubble_Game.png"),
  //     link: (
  //       <button onClick={() => Newtap("Mailto:Jihoon0324@hotmail.com")}>
  //         Restaurant Code
  //       </button>
  //     ),
  //   },

  //   {
  //     id: 5,
  //     type: "React",
  //     title: "Restaurant Menu fffff",
  //     language: "React",
  //     img: require("../assets/img/tetris.png"),
  //     link: (
  //       <button
  //         onClick={() =>
  //           Newtap("https://github.com/jihoon0324/Tetris_javascrip")
  //         }
  //       >
  //         Restaurant Menu Code
  //       </button>
  //     ),
  //   },
  // ];

  function filter_test(props) {
    return PortfolioList.filter(
      (Portfolio_List) => Portfolio_List.language === props
    ).map((portfolio) => (
      <ul className="list_component hover" key={portfolio.id}>
        <li>
          {portfolio.title} <br />
          {portfolio.language}
          <br />
          <img src={portfolio.img} />
          {portfolio.link}
          <br />
        </li>
      </ul>
    ));
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Col className="test">
                          {PortfolioList.filter(
                            (Portfolio_List) => Portfolio_List.type === "All"
                          ).map((portfolio) => (
                            <ul
                              className="list_component hover"
                              key={portfolio.id}
                            >
                              <li>
                                {portfolio.title} <br />
                                {portfolio.language}
                                <br />
                                <img src={portfolio.img} />
                                {portfolio.link} &nbsp;
                                {portfolio.link2}
                              </li>
                            </ul>
                          ))}
                        </Col>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="second"
                        title="Java"
                        onEnter={(e) => filter_test("React")}
                      >
                        <Col className="test">{filter_test("React")}</Col>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>pppppppppppppppppppp</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
