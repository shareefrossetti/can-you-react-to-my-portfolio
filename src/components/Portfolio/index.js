import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'My Online Tech Blog',
			description:
				'I created an application that is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. I built this site completely from scratch and deployed it to Heroku.',
			image: '1.png',
			github: 'https://github.com/sabrtraveler/my-online-blog-tech-it-out-ohya',
			deployed: 'https://my-online-blog-tech-it-out.herokuapp.com/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: '6.png',
			github: 'https://github.com/sabrtraveler/hows-the-weather-over-there-ohya',
			deployed: 'https://sabrtraveler.github.io/hows-the-weather-over-there-ohya/',
		},
		{
			name: 'Code Quiz',
			description:
				'This is an application that allows you to play a quiz and it stores their high score in the local host.',
			image: '5.png',
			github: 'https://github.com/sabrtraveler/are-you-a-whiz-code-quiz-ohyaithub.com/OwaisIslam/password-generator',
			deployed: 'https://sabrtraveler.github.io/are-you-a-whiz-code-quiz-ohya',
		},
		{
			name: 'Note Taker',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			image: '7.png',
			github: 'https://github.com/sabrtraveler/got-notes-ohya',
			deployed: 'https://got-notes-ohya.herokuapp.com/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
