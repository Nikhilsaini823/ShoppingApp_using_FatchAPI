import React from "react";
import Footer from "./Footer";
import Sliders from "./Home/Slider/Sliders";
import Navbar from "./Navbar";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <>
      <Navbar/>
      <Component {...rest} />
      <Footer/>
    </>
  )
}

export default PublicRoute;