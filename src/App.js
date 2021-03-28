import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Posts from './components/Posts';
import Projects from './components/Projects';
import { Row, Col, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="mainDiv">
        <Navbar expand="lg" className="navbr">
          <Navbar.Brand href="#home">Jayanth Mogadampalli</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink to="/" exact activeClassName="selected" className="ml-2 mr-2">Home</NavLink>
              <NavLink to="/Skills" activeClassName="selected" className="ml-2 mr-2">Skills</NavLink>
              <NavLink to="/Experience" activeClassName="selected" className="ml-2 mr-2">Experience</NavLink>
              <NavLink to="/Posts" activeClassName="selected" className="ml-2 mr-2">Posts</NavLink>
              <NavLink to="/Projects" activeClassName="selected" className="ml-2 mr-2">Projects</NavLink>
              <NavLink to="/Contact" activeClassName="selected" className="ml-2 mr-2">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      <Row className="m-0 height-100">
        <Col className="col-lg-12">
          <Switch>
            <Route path='/Posts' component={Posts} />
            <Route path='/Skills' component={Skills} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Experience' component={Experience} />
            <Route path='/Projects' component={Projects} />
            <Route path='/' exact component={About} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default App;
