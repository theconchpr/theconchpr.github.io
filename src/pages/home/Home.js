import React from "react";
import styles from "./Home.module.css";

import WideSection from "../../components/WideSection";
import HighlightSection from "../../components/HighlightSection";
import Highlights from "../../components/Highlights";
import Hero from "../../components/Hero";
import CardList from "../../components/CardList";
import CARD_IMAGE from "../../images/logo_2023_150ppi.png";

const HomePage = () => {
  const cardListInfo = [
    {
      image: CARD_IMAGE,
      title: "Engineering Design",
      description: "Engineering Design",
      buttons: ["Learn More"],
    },
    {
      image: CARD_IMAGE,
      title: "Quality Assurance",
      description: "Quality Assurance",
      buttons: ["Learn More"],
    },
    {
      image: CARD_IMAGE,
      title: "Hygienic Components",
      description: "Hygienic Components",
      buttons: ["Learn More"],
    },
  ];

  return (
    <>
      <Hero></Hero>
      {/* <WideSection title="Custom Fabrication">
        <CardList cardListInfo={cardListInfo} />
      </WideSection>
      <WideSection title="More Custom Fabrication" background={"#eeeeee"}>
        <CardList cardListInfo={cardListInfo} />
      </WideSection>
      <HighlightSection title={"Highlight Section"} background={"#eeeeee"}>
        <Highlights />
      </HighlightSection> */}
    </>
  );
};

export default HomePage;
