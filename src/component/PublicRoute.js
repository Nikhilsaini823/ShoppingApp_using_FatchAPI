import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PublicRoute = ({ component: Component }) => { 
  return (
    <>
      <Navbar/>
      <Component />
      <Footer/>
    </>
  )
}

export default PublicRoute;