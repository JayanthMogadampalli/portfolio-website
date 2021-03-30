import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Posts from './components/Posts';
import { Row, Col, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="mainDiv">
        <Navbar collapseOnSelect expand="lg" className="navbr">
          <Navbar.Brand href="#home">Jayanth Mogadampalli</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink to="/" exact activeClassName="selected" className="ml-2 mr-2">Home</NavLink>
              <NavLink to="/Skills" activeClassName="selected" className="ml-2 mr-2">Skills</NavLink>
              <NavLink to="/Experience" activeClassName="selected" className="ml-2 mr-2">Experience</NavLink>
              <NavLink to="/Posts" activeClassName="selected" className="ml-2 mr-2">Posts</NavLink>
              <NavLink to="/Contact" activeClassName="selected" className="ml-2 mr-2">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      <Row className="m-0 height-100">
        <Col className="col-lg-12">
          <Switch>
            <Route path='/Skills' component={Skills} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Experience' component={Experience} />
            <Route path='/Posts/1' render={() => (window.location = "https://medium.com/@jayu6766/four-years-journey-of-a-cs-undergrad-with-learning-unlearning-and-relearning-36f30540bc4a")}  />
            <Route path='/Posts/2' render={() => (window.location = "https://medium.com/@jayu6766/journey-from-a-newbie-to-react-developer-5c7b2a8ad17f")}  />
            <Route path='/Posts/3' render={() => (window.location = "https://medium.com/dsc-sastra-deemed-to-be-university/readme-gateway-to-open-source-project-a9afceb04384")}  />
            <Route path='/Posts' exact component={Posts} />
            <Route path='/' exact component={About} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default App;
