import React from "react";
import reactDom from "react-dom";
import App from "./App";
import smoothscroll from "smoothscroll-polyfill";

// kick off the polyfill!
smoothscroll.polyfill();

reactDom.render(<App />, document.getElementById("root"));
