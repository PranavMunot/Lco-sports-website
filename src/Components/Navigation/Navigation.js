import React, { useState } from "react";
import logo from "../../images/sports-logo-transparent.png";

import Navlist from "./Navlist";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  let dashBtnHandler = () => {
    setIsOpen(!isOpen);
  };

  const closeBtnHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? <Navlist onClick={closeBtnHandler} /> : null}
      <div className="row navigation">
        <div className="col-1-2 navigation-logo-area">
          <a href="#">
            <img src={logo} alt="logo" className="navigation-logo" />
          </a>
        </div>
        <div className="col-1-2 navigation-area">
          <div onClick={dashBtnHandler} className="dash">
            <span
              className={`dash-btn dash-btn-${isOpen ? "open" : "close"}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
