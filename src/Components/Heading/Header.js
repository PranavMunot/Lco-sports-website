import React from "react";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import About from "../About/About";
import Team from "../Team/Team";
import Tournament from "../Tournament/Tournament";
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <div className="header">
      <Navigation />
      <Main />
      <About />
      <Team />
      <Tournament />
      <Faq />
      <Footer />
    </div>
  );
};

export default Header;
