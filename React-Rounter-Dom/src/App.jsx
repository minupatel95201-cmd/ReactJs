import React from "react";
import NavBar from "./Layout/NavBar";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Layout/Footer";
import { Route, Routes } from "react-router-dom";
import Collection from "./Pages/Collection";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path ='/product/collection' element={<Collection/>}></Route>
        <Route path ='*' element={<NotFound/>}></Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
