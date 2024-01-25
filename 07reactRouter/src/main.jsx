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
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}></Route>

      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route path="usertamim/:tamimid" element={<UserTamim />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
