import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Card1 from "./component/Card1";
import Card2 from "./component/Card2";
import Home from "./component/Home";
import PublicRoute from "./component/PublicRoute";
import Sliders from "./component/Home/Slider/Sliders";
import Products from "./component/Product/Products";
import ProductDetail from "./component/Product/ProductDetail";
import Jobform from "./component/JobProfile/Jobform";
import EditJobForm from "./component/JobProfile/EditJobForm";

function App() {
  return (
    
    <BrowserRouter>
    <Routes>    
      <Route path="/" element={<PublicRoute component={Home} />} />
      <Route path="/about"  element={<PublicRoute component={About} />} />
      <Route path="/card1" element={<PublicRoute component={Card1}/>}/>
      <Route path="/card2" element={<PublicRoute component={Card2}/>}/>
      <Route path="/sliders" element={<PublicRoute component={Sliders} />} />
      <Route path="/product" element={<PublicRoute component={Products}/>}/>
      <Route path="/productdetails/:id" element={<PublicRoute component={ProductDetail}/>}/>
      <Route path="/jobform" element={<PublicRoute component={Jobform}/>}/>
      <Route exact path="/editData/:itemid"element={<PublicRoute component={EditJobForm}/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
