import React from 'react';
import { Media } from 'react-bootstrap';
import readMe from '../assets/readme.jpeg';
import newbie from '../assets/newbie.jpeg';
import csUnderGrad from '../assets/csUnderGrad.jpeg';
import internPost from '../assets/lifeOfEngineer.jpg';
import './Posts.scss';

export default function Posts() {


	return (
		<div className="d-flex flex-row flex-wrap posts" id="Posts">
		<div className="col-lg-4"><h1 className="postsTitle">Recent Posts</h1></div>
		<div className="d-flex flex-column flex-wrap col-lg-7">
		<div className="post">
		<a href='https://medium.com/@jayu6766/four-years-journey-of-Nav.Link-cs-undergrad-with-learning-unlearning-and-relearning-36f30540bc4a' rel="noreferrer" target="_blank">
		<Media>
		<img
		  width={100}
		  height={100}
		  className="mr-3"
		  src={csUnderGrad}
		  alt="Generic placeholder"
		/>
		<Media.Body>
		  <h3>Four years Journey of a CS Undergrad with Learning,Unlearning and Relearning!!</h3>
		  <p>
		  Ultimately career road opens wide and multiple doors opens up to mold you into a precious piece..
		  </p>
		</Media.Body>
	  </Media>
		</a>
         </div>	 
		 <div className="post">
		 <a href='https://medium.com/@jayu6766/journey-from-Nav.Link-newbie-to-react-developer-5c7b2a8ad17f' rel="noreferrer" target="_blank">
		 <Media>
		 <img
		   width={100}
		   height={100}
		   className="mr-3"
		   src={newbie}
		   alt="Generic placeholder"
		 />
		 <Media.Body>
		   <h3>Journey from a newbie to React developer!!</h3>
		   <p>
		   You are soon going to land in multi-dimensional space if you have choosen to be a developer…
		   </p>
		 </Media.Body>
	   </Media>
		 </a>
		  </div>	 
		  <div className="post">
		  <a href="https://medium.com/dsc-sastra-deemed-to-be-university/readme-gateway-to-open-source-project-a9afceb04384" rel="noreferrer" target="_blank">
		  <Media>
		  <img
			width={100}
			height={100}
			className="mr-3"
			src={readMe}
			alt="Generic placeholder"
		  />
		  <Media.Body>
			<h3>README — Gateway to Open-Source Project</h3>
			<p>
			Everything begins with a small amount of effort and ultimately hard-work pays off…
			</p>
		  </Media.Body>
		</Media>
		  </a>
		  </div>
		  <div className="post">
		  <a  href="https://jayanth-mogadampalli.medium.com/life-as-a-software-engineer-intern-juggling-of-emotions-b822b1271fcd" rel="noreferrer" target="_blank">
		  <Media>
		  <img
			width={100}
			height={100}
			className="mr-3"
			src={internPost}
			alt="Generic placeholder"
		  />
		  <Media.Body>
			<h3>Life as a Software Engineer Intern==Juggling of Emotions</h3>
			<p>
			Sometimes when you expect less then you can receive more from your life!
			</p>
		  </Media.Body>
		</Media>
		  </a>
		   </div>	  
 		</div>
		 </div>
	)
}
