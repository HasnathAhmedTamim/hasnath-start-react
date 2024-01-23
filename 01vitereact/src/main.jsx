import React from "react";
import ReactDOM from "react-dom/client";

// import { jsx as _jsx } from "react/js";
// import App from "./App.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App|???</h1>
//     </div>
//   );
// }

// const googleElement = (
//   <a href="https:google.com" target="_blank">
//     GO to google!!!!!
//   </a>
// );
const anotherUser = "Soldier Boy";

// method babble inject REACT
const reactElement = React.createElement(
  "a",
  {
    href: "https://youtube.com",
    target: "_blank",
  },
  "visit youtube",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
