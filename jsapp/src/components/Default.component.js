import React from "react";
import Navbar from "./navbar.component";
import Defaultmain from "./defaultmain.component";
class Default extends React.Component {
  render() {
    return (
      <div className="parent-portfolio">
        <Navbar />
        <Defaultmain />
      </div>
    );
  }
}

export default Default;
