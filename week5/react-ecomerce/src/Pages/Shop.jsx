import React from "react";
import "./index.css";
import HeroSection from "../Components/HeroSection";
import Popular from "../Components/Popular";
import Offers from "../Components/Offers";
import NewCollection from "../Components/NewCollection";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

const Shop = () => {
  return (
    <>
      <HeroSection/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </>
  );
};

export default Shop;
