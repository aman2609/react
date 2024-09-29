import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

import Error from "./src/components/Error.js";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Restaurant from "./src/components/Restaurant";
// import logo from "logo.svg"

// Tasty Trek










const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/restaurant/:id',
        element:<Restaurant />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter} />);
