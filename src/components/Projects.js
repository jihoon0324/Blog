import { Container, Row, Col, Tab, Nav, Tabs } from "react-bootstrap";
import { PortfolioList } from "./PortfolioList";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
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
        {" "}
        <h4>PROJECTS</h4>
        <Tabs defaultActiveKey="all">
          <Tab eventKey="all" title="All">
            {PortfolioList.filter(
              (Portfolio_List) => Portfolio_List.type === "All"
            ).map((portfolio) => (
              <ul className="list_component hover" key={portfolio.id}>
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
          </Tab>
          <Tab
            eventKey="Java"
            title="Java"
            onEnter={(e) => filter_test("Java")}
          >
            {filter_test("Java")}
          </Tab>
          <Tab
            eventKey="Javascript"
            title="Javascript"
            onEnter={(e) => filter_test("Javascript")}
          >
            {filter_test("Javascript")}
          </Tab>
          <Tab
            eventKey="React"
            title="React"
            onEnter={(e) => filter_test("React")}
          >
            {filter_test("React")}
          </Tab>
        </Tabs>
        {/* <Row>
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
                        <Nav.Link eventKey="second">React</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="third">JavaScript</Nav.Link>
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
        </Row> */}
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
