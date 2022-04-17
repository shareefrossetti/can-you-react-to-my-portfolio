import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/recent-photo.jpeg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					My name is Shareef! I'm a full stack web developer. I will soon early a certificate from Carleton University in full stack development
					, having skills in JavaScript, CSS, React.js, and responsive web
					design. I am known as an innovative problem solver
					passionate about developing apps, with a focus on
					mobile-first design and development. With each project,
					my aim is to best engage my audience for an impactful
					user experience.
				</p>
			</div>
		</section>
	);
}

export default About;
