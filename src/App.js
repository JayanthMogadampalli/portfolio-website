import React,{useEffect} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Posts from './components/Posts';
import { Row, Col, Navbar, Nav } from 'react-bootstrap';
import Resume from './assets/resume.pdf';

function App() {

  useEffect(() => {
    let x =  document.getElementsByClassName("home");
    console.log(x);
    if(x[0]){ x[0].classList.add('active');}
    return ()=> null;
  });

  const changeClass =(e)=>{
    let x =  document.getElementsByClassName("active");
    if(x[0].text!==e.target.text)
      if(x.length===1 || x.length===2){
        x[0].classList.remove('active');
      }
    else{ x[0].classList.remove('active');}
      x =  document.getElementsByClassName("active");
  };

  return (
    <div className="mainDiv">
        <Navbar collapseOnSelect expand="lg" className="navbr">
          <Navbar.Brand href="#home">Jayanth Mogadampalli</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/#about" exact onClick={(e)=>{changeClass(e)}}  data-target="#about" className="ml-2 mr-2 home">Home</Nav.Link>
              <Nav.Link href="/#Skills" onClick={(e)=>{changeClass(e)}}  data-target="#Skills" className=" ml-2 mr-2">Skills</Nav.Link>
              <Nav.Link href="/#Experience" onClick={(e)=>{changeClass(e)}}  data-target="#Experience" className="ml-2 mr-2">Experience</Nav.Link>
              <Nav.Link href="/#Posts" onClick={(e)=>{changeClass(e)}}  data-target="#Posts" className="ml-2 mr-2">Posts</Nav.Link>
              <Nav.Link href={Resume} onClick={(e)=>{changeClass(e)}}  rel="noreferrer" target="_blank" className="ml-2 mr-2">Resume</Nav.Link>              
              <Nav.Link href="/#Contact" onClick={(e)=>{changeClass(e)}} data-target="#Contact" className="ml-2 mr-2">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <Row className="m-0 height-100">
        <Col className="col-lg-12">
        <About/>
        <Skills/>
        <Experience/>
        <Posts/>
        <Contact/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
