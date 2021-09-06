import React from "react";
// import logo from "../../images/sports-logo-template-for-a-basketball-tournament-2703e.png";
import logo from "../../images/sports-logo-transparent.png";

function About() {
  return (
    <section id="about" className="section-about">
      <h1 className="about-heading heading">We are Champions!</h1>
      <div className="row row-sm center">
        <div className="col-1-2">
          <p className="about-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
            ornare aenean euismod elementum nisi quis eleifend quam adipiscing.
            Vitae justo eget magna fermentum iaculis eu. Odio ut enim blandit
            volutpat maecenas volutpat. Eget aliquet nibh praesent tristique
            magna sit amet purus gravida. Ac turpis egestas maecenas pharetra
            convallis posuere morbi.
          </p>
          <p className="about-para">
            Aliquam sem et tortor consequat id porta. Non diam phasellus
            vestibulum lorem sed risus ultricies tristique nulla. Amet cursus
            sit amet dictum sit amet justo. Eget duis at tellus at urna
            condimentum mattis pellentesque. Vel orci porta non pulvinar neque
            laoreet suspendisse. Phasellus faucibus scelerisque eleifend donec
            pretium vulputate sapien nec sagittis. Consectetur purus ut faucibus
            pulvinar elementum. Aliquet nec ullamcorper sit amet risus. Mi quis
            hendrerit dolor magna eget est lorem ipsum dolor. Tellus cras
            adipiscing enim eu turpis egestas pretium.
          </p>
        </div>
        <div className="col-1-2">
          <img src={logo} alt="logo Image" className="about-image" />
        </div>
      </div>
    </section>
  );
}

export default About;
