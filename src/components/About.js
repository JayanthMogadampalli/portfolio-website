import React from 'react';
import './About.scss';
import { Row, Col } from 'react-bootstrap';
import usrImg from '../assets/userImg.jpg';


export default function About() {
	return (
		<div className="m-0 height-92">
			<Row className="routeDiv">
				<Col lg={4} className="col-lg-4 profile d-flex flex-column">
					<div>
						<img src={usrImg} width="100%" height="500px" className="userImg avatar avatar-circle" alt="userImage"></img>
					</div>
					<div className="potrait-title">
						<h2>Jayanth Mogadampalli</h2>
						<h3>Software Engineer</h3>
						<h3>Freshworks,Hyderabad</h3>
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
					<h1>Biography</h1>
					<p>
						I am Software Engineer at Freshworks, Hyderabad joined in 2020. I worked on developing React web applications and slack chat bot and deploying it using AWS services and build and infrastructure tools.I have a Bachelor of Technology degree from the SASTRA Deemed to be University.
			 </p>
					<p>
						I am a Frontend developer with good knowledge on latest technologies.I love to learn new things and write code.I am a lifetime learner and wish to make a difference.
			 </p>
					<div className="d-flex flex-row">
						<div className="interests">
							<h3>Interests</h3>
			   <div className="d-flex flex-column">
								<div>
									FullStack Development
	    		 </div>
								<div>
									Android Development
				 </div>
							</div>
						</div>
						<div className="interests d-flex flex-column">
						    <h3>Education</h3>
							<div class="d-flex flex-row">
								<div><i class="fa-li fas fa-graduation-cap d-inline"></i></div>
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
