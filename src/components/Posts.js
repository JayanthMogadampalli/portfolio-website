import React from 'react';
import {Link} from 'react-router-dom';
import { Media } from 'react-bootstrap';
import readMe from '../assets/readme.jpeg';
import newbie from '../assets/newbie.jpeg';
import csUnderGrad from '../assets/csUnderGrad.jpeg';
import './Posts.scss';

export default function Posts() {
	return (
		<div className="d-flex flex-column posts">
		<h1 className="postsTitle">Posts</h1>
		<div className="post">
		<Link to='/Posts/1'>
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
		</Link>
         </div>	 
		 <div className="post">
		 <Link to='/Posts/2'>
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
		 </Link>
		  </div>	 
		  <div className="post">
		  <Link to='/Posts/3'>
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
		  </Link>
		   </div>	  
 		</div>
	)
}
