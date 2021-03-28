import React from 'react';
import './Skills.scss';

export default function Skills() {
	return (
		<div className="skillsContainer">
		<div className="featurette d-flex flex-column ">
			<div>
				<h1 className="skillsText">Skills</h1>
			</div>
			<div className="d-flex flex-row flex-wrap skills">
				<div className="d-flex flex-column col-lg-4">
					<div className="featurette-icon"><i className="fab fa-js-square fa-2x"></i></div>
					<h3>Javascript</h3>
					<p>Javascript,Typescript,NodeJs,HTML5,CSS3,SASS</p>
				</div>
				<div className="d-flex flex-column col-lg-4">
				<div className="featurette-icon"><i className="fab fa-react fa-2x"></i></div>
					<h3>React and Testing Tools</h3>
					<p>React, React-Redux, React-Native, Jest, Enzyme</p>
				</div>
				<div className="d-flex flex-column col-lg-4">
				<div className="featurette-icon"><i className="fab fa-java fa-2x"></i></div>
				<h3>Java</h3>
				<p>Java,Dropwizard</p>
				</div>
				<div className="d-flex flex-column col-lg-4">
				<div className="featurette-icon"><i className="fas fa-database fa-2x"></i></div>
					<h3>Databases</h3>
					<p>MySQL, MongoDB</p>
				</div>
				<div className="d-flex flex-column col-lg-4">
				<div className="featurette-icon"><i className="fab fa-docker fa-2x"></i></div>
					<h3>DevOps</h3>
					<p>Docker,Terraform</p>
				</div>
				<div className="d-flex flex-column col-lg-4">
				<div className="featurette-icon"><i className="fab fa-aws fa-2x"></i></div>
					<h3>AWS Tools</h3>
					<p>AWS EC2,OpsWorks,ECS,DynamoDB,ALB etc</p>
				</div>
			</div>
		</div>
	</div>
	)
}
