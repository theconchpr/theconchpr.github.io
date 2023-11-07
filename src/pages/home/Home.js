import React from "react";
import styles from "./Home.module.css";
import home from "../../data/home";

import Hero from "../../components/Hero";
import CARD_IMAGE from "../../images/logo_2023_150ppi.png";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Welcome to Paradise"
        image={home.heroImage}
        primaryButton="Book on Airbnb"
        primaryOnClick={() => Navigate("https://www.airbnb.com/")}
        // replace the "Navigate()" hook with the solution you added to the procomp site.
        secondaryButton="Learn More"
        secondaryOnClick={() => Navigate("/gallery")}
        // replace the "Navigate()" hook with the solution you added to the procomp site.
      ></Hero>
    </>
  );
};

export default HomePage;
