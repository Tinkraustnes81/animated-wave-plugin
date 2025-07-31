import React from "react";
import ReactDOM from "react-dom";
import AnimatedWave from "./AnimatedWave";

window.addEventListener("ww-load", () => {
  window.wewebComponents = window.wewebComponents || {};

  window.wewebComponents["animated-wave"] = {
    init(root, props) {
      ReactDOM.render(<AnimatedWave {...props} />, root);
    },
    update(root, props) {
      ReactDOM.render(<AnimatedWave {...props} />, root);
    },
    destroy(root) {
      ReactDOM.unmountComponentAtNode(root);
    },
  };
});