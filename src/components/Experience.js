import React from 'react';
import { Card } from 'react-bootstrap';
import './Experience.scss';

export default function Experience() {
	return (
		<div className="d-flex flex-row experience flex-wrap" id="Experience">
			<div className="col-lg-4"><h1 className="experienceTitle">Experience</h1></div>
			<div className="col-lg-8 timeline flex-wrap">
				<div className="container right">
					<div className="content">
						<Card>
							<Card.Body>
								<Card.Title className="exp-title">UI Engineer 2</Card.Title>
								<Card.Title>MoEngage</Card.Title>
								<Card.Text>
									March 2022 - Present
						</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</div>
				<div className="container right">
					<div className="content">
						<Card>
							<Card.Body>
								<Card.Title className="exp-title">Software Engineer</Card.Title>
								<Card.Title>Freshworks Technologies Pvt Ltd</Card.Title>
								<Card.Text>
									October 2020 - March 2022
						</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</div>
				<div className="container right">
					<div className="content">
						<Card >
							<Card.Body>
								<Card.Title className="exp-title">Software Engineer Intern</Card.Title>
								<Card.Title>Freshworks</Card.Title>
								<Card.Text>
									December 2019 - September 2020
				   				</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</div>
				<div className="container right">
					<div className="content">
						<Card>
							<Card.Body>
								<Card.Title className="exp-title">Software Engineer Intern</Card.Title>
								<Card.Title>UnoCareer Pvt Ltd</Card.Title>
								<Card.Text>
									May 2019 - June 2019
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</div>
				<div className="container right">
					<div className="content">
						<Card>
							<Card.Body>
								<Card.Title className="exp-title">Intern</Card.Title>
								<Card.Title>Snithik Technologies</Card.Title>
								<Card.Text>
									May 2018 - June 2018
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}
