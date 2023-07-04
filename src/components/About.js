// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Developer Who Loves to Build Fantastic Applications</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} />
      <p className="content is-italic mt-4">
        I'm Shareef, a Software Engineering aspiring to the best coder on the planet!
      </p>
      <p className="content">
       I enjoy playing sports and I like to create cool apps to better the world.
      </p>
    </div>
  );
}

export default About;
