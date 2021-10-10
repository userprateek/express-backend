import React from "react";
import { Link } from "react-router-dom";

class Defaultmain extends React.Component {
  render() {
    return (
      <div className="site-main">
        <div className="site-main-inner">
          <div className="home-section">
            <div className="home-section-inner">
              <div className="home-heading">Hi, I am Prateek,</div>
              <h2 className="home-subheading">
                A professional software engineer specialized in <br />
                both <strong>front-end and back-end </strong>
              </h2>
            </div>
            <div className="home-button">
              <Link to="/portfolio" className="home-button-link">
                portfolio
              </Link>
              <Link to="/resume" className="home-button-link">
                resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Defaultmain;
