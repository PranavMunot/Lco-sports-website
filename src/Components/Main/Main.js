import React from "react";
import ball from "../../images/basketball-ball.png";

function Main() {
  return (
    <div className="row main">
      <h1 className="main-tagline">Go fight for it team.</h1>
      <span className="main-ball-icon">
        <img src={ball} alt="bsktball" className="main-ball-icon-img" />
      </span>
    </div>
  );
}

export default Main;
