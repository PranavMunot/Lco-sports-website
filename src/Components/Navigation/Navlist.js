import React from "react";
import reactDom from "react-dom";

const Navlist = ({ onClick }) => {
  const list = (
    <ul className="navigation-list ">
      <li onClick={onClick} className="navigation-item">
        <a href="#" className="navigation-link">
          Home
          <span className="navigation-link-bottom" />
        </a>
      </li>
      <li onClick={onClick} className="navigation-item">
        <a href="#about" className="navigation-link">
          About Us
          <span className="navigation-link-bottom" />
        </a>
      </li>
      <li onClick={onClick} className="navigation-item">
        <a href="#team" className="navigation-link">
          Team
          <span className="navigation-link-bottom" />
        </a>
      </li>
      <li onClick={onClick} className="navigation-item">
        <a href="#tournament" className="navigation-link">
          Tournament
          <span className="navigation-link-bottom" />
        </a>
      </li>
      <li onClick={onClick} className="navigation-item">
        <a href="#" className="btn navigation-link">
          Authenticate
          <span className="navigation-link-bottom" />
        </a>
      </li>
    </ul>
  );

  return reactDom.createPortal(list, document.getElementById("navPortal"));
};

export default Navlist;
