import logo from './logo.svg';
import './App.css';
import * as React from "react";
import Register from "./pages/Register"
import Login from "./pages/login"
import Write from "./pages/Write"
import Home from "./pages/home"
import Single from "./pages/single"
import Footer from './components/Footer';
import Navbar from './components/navbar';
import "./project.scss"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

const layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    Element: <layout />,
    children: [
      {
        path: "/",
        Element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

])

function App() {
  return (
    <div className="App">
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
