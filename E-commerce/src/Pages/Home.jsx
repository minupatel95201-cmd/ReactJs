import React from "react";
import ProductBar from "../Components/ProductBar";
import HeroSection from "../Components/Home/HeroSection";
import DeatilsBar from "../Components/Home/DetailsBar";
import CategoryBar from "../Components/Home/CategorayBar";
import Offer from "../Components/Home/Offer";
import DealBar from "../Components/Home/DealBar";
import DescountBar from "../Components/Home/DescountBar";
import NewsLetter from "../Components/Home/NewsLetter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DeatilsBar />
      <CategoryBar />
      <ProductBar />
      <Offer />
      <DealBar />
      <DescountBar/>
      <NewsLetter/>

      
    </>
  );
};

export default Home;
