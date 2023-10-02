import HERO_IMAGE from "../images/terrace_with_couch.png";

const home = {
  heroImage: HERO_IMAGE,
  heroTitle: "Welcome to paradise",
  heroButton: "Book Now",
  heroButtonFunction: () => {
    console.log("navigate to airbnb link");
  },
  articles: [
    {
      id: "aguada",
      label: "location",
      title: "The Authentic Aguada Experience",
      body: "Aguada is a beautiful town outside of the usual tourist zones of Puerto Rico. It neighbors Rincon, a legendary surf spot known for great waves, warm water, and amazing views. The beaches along the Aguada coast collect black volcanic sand that's unique to the area. It's magnetic! Rock formations also appear in certain spots and create natural pools for sitting or swimming. The charm of Puerto Rico can be found in Aguada.",
      button: "Nearby Attractions",
      onClick: () => {},
    },
    {
      id: "attractions",
      label: "Explore",
      title: "Exploring West Puerto Rico",
      body: "The west coast of Puerto Rico has a lot to offer. The coastline provides amazing views while walking along the beach. The occasional turtle, hermit crab, or lizard will meet you on your journey! The natural sea pools are home to a lot of exotic sea creatures that can be seen with a clear pair of goggles (snorkel optional). If the waves are good, surfing is an option and there are a few surf shops where surf boards can be rented. The Rincon town square holds different events, including the art festival every Thursday evening. Great Puerto Rican food is easy to find and other natural wonders are available to explore. Check out our favorite spots or discover your own!",
      button: "Our Favorite Spots",
      onClick: () => {},
    },
  ],
};

export default home;
