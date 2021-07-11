import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/Hero/HeroSection.js"
import Authentication from '../Components/Authentication/Authentication'
import { WrapperDiv } from "../Components/Styles/Container.styles";

const Home = () => {
  return (
    <>
      <Header />
      <WrapperDiv backgroundColor="#260F3B"  width="100vw">
        <HeroSection />
      </WrapperDiv>
      <Footer />
      <Authentication />
    </>
  );
};

export default Home;
