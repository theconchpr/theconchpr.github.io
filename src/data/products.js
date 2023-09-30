import HERO_IMAGE from "../images/ceiling_panels.png";
import DESIGN_IMAGE from "../images/ceiling_panels.png";

const products = {
  id: "utility-panels",
  title: "Utility Panels",
  hero: {
    label: "UTILITY PANELS",
    title: "Bringing utilities into your clean space.",
    body: "Our utility panels can be installed in the ceiling or the wall and have been used to add different utilities into the clean room space, namely oxygen, nitorgen, clean air, and water.",
    button: "Get a Quote",
    onClick: () => {
      console.log("this is the button function for 'UTILITY PANELS' label");
    },
    image: DESIGN_IMAGE,
  },
  articles: [
    {
      id: 1,
      label: "DESIGN",
      title: "Engineering The Best Solutions",
      body: "Our team of engineers is led by decades of experience. Our designers use the latest modeling software and work directly with the fabrication team to ensure designs meet construction requirements",
      button: "Get a Quote",
      onClick: () => {
        console.log("this is the button function for the 'DESIGN' label");
      },
      image: DESIGN_IMAGE,
    },
    {
      id: 2,
      label: "EXPERTISE",
      title: "We Understand Your Process",
      body: "The leaders on our team have been in the process industry business for over 35 years. We've dedicated our lives to this industry and our wisdom guides us in delivering top quality process solutions.",
      button: "Get a Quote",
      onClick: () => {
        console.log("this is the button function for the 'EXPERTISE' label");
      },
      image: DESIGN_IMAGE,
    },
  ],
};

export default products;
