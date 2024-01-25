import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import UserTamim from "./components/UserTamim/UserTamim.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout></Layout>,
//     children: [
//       { path: "", element: <Home></Home> },
//       {
//         path: "about",
//         element: <About></About>,
//       },
//       {
//         path: "contact",
//         element: <Contact></Contact>,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route path="" element={<Home></Home>}></Route>
      <Route path="about" element={<About></About>}></Route>
      <Route path="usertamim/:tamimid" element={<UserTamim />} />
      <Route path="contact" element={<Contact></Contact>}></Route>
      <Route path="user/:userId" element={<User></User>}></Route>
      <Route
        loader={githubInfoLoader}
        path="github"
        element={<Github></Github>}
      ></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
