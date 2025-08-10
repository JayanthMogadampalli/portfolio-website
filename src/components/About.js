import React from 'react';
import './About.scss';
import { Row, Col } from 'react-bootstrap';
import usrImg from '../assets/userImg.jpg';


export default function About() {
	return (
		<div className="m-0 height-92" id="about" >
			<Row className="routeDiv">
				<Col lg={4} className="col-lg-4 profile d-flex flex-column">
					<div>
						<img src={usrImg} width="100%" height="500px" className="userImg avatar avatar-circle" alt="userImage"></img>
					</div>
					<div className="potrait-title">
						<h2>Jayanth Mogadampalli</h2>
						<h3>UI Engineer 2</h3>
						<h3>MoEngage, Bangalore</h3>
					</div>
					<div className="network-icons d-flex flex-row">
						<div>
							<a href="jayu6766@gmail.com">
								<i className="fas fa-envelope big-icon fa-2x"></i>
							</a>
						</div>
						<div>
							<a href="https://github.com/JayanthMogadampalli" rel="noopener">
								<i className="fab fa-github big-icon fa-2x"></i>
							</a>
						</div>
						<div>
							<a href="https://www.instagram.com/jayanth_mogadampalli/" rel="noopener">
								<i className="fab fa-instagram big-icon fa-2x"></i>
							</a>
						</div>
						<div>
							<a href="https://www.linkedin.com/in/jayanth-mogadampalli-096735156/" rel="noopener">
								<i className="fab fa-linkedin big-icon fa-2x"></i>
							</a>
						</div>
						<div>

						</div>
					</div>
				</Col>
				<Col lg={8} className="col-lg-8 userInfo">
					<h1 className="userTitle">Biography</h1>
					<p>
						I am a UI Engineer 2 at MoEngage, Bangalore joined in 2022. I work on developing React web applications and building reusable UI components for customer engagement platforms. I have experience in developing high-scale applications and optimizing performance. I have a Bachelor of Technology degree from the SASTRA Deemed to be University.
			 </p>
					<p>
						I am a Frontend developer with good knowledge on latest technologies.I love to learn new things and write code.I am a lifetime learner and wish to make a difference.
						Aside from work, I write articles in medium and short stories in my free time.
			        </p>
					<p>
					  My interest lies in solving real-life problems using technology.
					</p>
					<div className="d-flex flex-row">
						<div className="interests">
							<h3>Interests</h3>
			   <div className="d-flex flex-column">
								<div>
									Full Stack Development
	    		 </div>
								<div>
									 Data Structures and Algorithms
				 </div>
							</div>
						</div>
						<div className="interests d-flex flex-column">
						    <h3>Education</h3>
							<div className="d-flex flex-row">
								<div><i className="fa-li fas fa-graduation-cap d-inline"></i></div>
								<div>BTech in Computer Science and Engineering,2020 <br/> SASTRA DEEMED UNIVERSITY, Thanjavur
								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	)
}
