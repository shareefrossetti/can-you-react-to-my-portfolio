//Needs links to my Github, Linkedin, and a Third Platform?

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My React Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/sabrtraveler" target="_blank" rel="noreferrer">
            Shareef Rossetti
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/shareefrossetti/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="https://www.topcoder.com/" target="_blank" rel="noreferrer">
            Best Coder Site
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
