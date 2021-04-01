import React from "react";
import ReactDOM from "react-dom";
// like that if you want to import the default
// import pi from "./math.js";

// to import somthing
// import x from "./math.js"; // This is somthing (x)

// import two things
import pi, { doublePi, triplePi } from "./math.js";

// or like that
// import * as pi from "./math.js";

ReactDOM.render(
  <ul>
    <li>1</li>
    {/* remeber doublePi is a function, so it needs () */}
    <li>{doublePi()}</li>
    <li>3</li>
    <li>{pi}</li>
  </ul>,
  document.getElementById("root")
);
