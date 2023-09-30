import HERO_IMAGE from "../images/terrace_with_couch.png";

const home = {
  heroImage: HERO_IMAGE,
  heroTitle: "Welcome to paradise",
  heroButton: "Book Now",
  heroButtonFunction: () => {
    console.log("navigate to airbnb link");
  },
};

export default home;
