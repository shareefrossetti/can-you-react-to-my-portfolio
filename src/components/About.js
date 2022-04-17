// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Super Hero/Model and soon to be Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Emily Necciai Mayeski"/>
      <p className="content is-italic mt-4">
        I'm Shareef, an awesome dude studying the full stack to be the best coder on the planet!
      </p>
      <p className="content">
       I enjoy playing sports and I like to create cool apps to better the world.
      </p>
    </div>
  );
}

export default About;
