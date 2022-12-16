import { Container, Row, Col, Tab, Nav, Tabs } from 'react-bootstrap';
import { PortfolioList } from './PortfolioList';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';

export const Projects = () => {
  function filter_test(props) {
    return PortfolioList.filter(
      (Portfolio_List) => Portfolio_List.type === props
    ).map((portfolio) => (
      <div className='list_component hover' key={portfolio.id}>
        <ul>
          <li> {portfolio.title} </li>
          <br />
          <li> {portfolio.language}</li>
          <br />
          <li>
            <img src={portfolio.img} />
          </li>
          <li> {portfolio.link}</li>
          <br />
        </ul>
      </div>
    ));
  }

  return (
    <section className='project' id='projects'>
      <Container>
        <h2>PROJECTS</h2>
        <Tabs className='tabsCss' defaultActiveKey='all'>
          <Tab className='tabCss' eventKey='all' title='All'>
            {PortfolioList.map((portfolio) => (
              <ul className='list_component hover' key={portfolio.id}>
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
            eventKey='Group'
            title='Group'
            onEnter={(e) => filter_test('Group')}
          >
            {filter_test('Group')}
          </Tab>

          <Tab
            eventKey='Personal'
            title='Personal'
            onEnter={(e) => filter_test('Personal')}
          >
            {filter_test('Personal')}
          </Tab>
        </Tabs>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  );
};
