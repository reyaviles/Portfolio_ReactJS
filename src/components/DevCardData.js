import pro1 from "../assets/Simon.jpg";
import carousel from "../assets/carousel.jpg";
import pika from "../assets/pika.jpg";
import todo from "../assets/to-do.jpg";
import weather from "../assets/weather.jpg";
import colibrosa from "../assets/colibrosa.jpg";
import subbuild from "../assets/subbuild.jpg";
import tiktok from "../assets/tiktok_clone.jpg";

const DevCardData = [
  {
    imgsrc: tiktok,
    title: "TikTok Clone",
    text:
      "A Tiktok Clone using the MERN stack (MongoDB, Express, React, Node). This was made to address the issue of not having my social media work on my portfolio. ",
    view: "https://tiktok-clone-e9609.web.app/",
    source: "https://github.com/reyaviles/tiktok_portfolio",
    category: "Full-Stack",
  },
  {
    imgsrc: subbuild,
    title: "Ecommerce Website Design",
    text:
      "I no longer have access to the source code for this website, but here are a couple of elements I helped build for White Tale Coffee. 'View' takes you to the subscription builder. 'Source' takes you to the homepage.",
    view: "https://whitetalecoffee.com/products/coffee-subscriptions",
    source: "https://whitetalecoffee.com/",
    category: "Web Dev",
  },
  {
    imgsrc: carousel,
    title: "Image Carousel",
    text:
      "A dynamic and fluid image carousel that responds to clicks. All images are originals created by me using Adobe Creative Suite and Affinity Designer.",
    view: "https://reyaviles.github.io/Personal_Art/",
    source: "https://github.com/reyaviles/Personal_Art",
    category: "HTML/CSS",
  },
  {
    imgsrc: todo,
    title: "To-Do List",
    text:
      "​A dynamic To-Do List that responds to adding/deleting items. Also, you can create a new list by typing a custom URL Slug. For example, if I wanted to create a 'Work' to-do list, I'd add '/work' at the end of the url. ",
    view: "https://pacific-earth-19611.herokuapp.com/",
    source: "https://github.com/reyaviles/To-DoList",
    category: "Full-Stack",
  },
  {
    imgsrc: pro1,
    title: "Simon Game",
    text:
      "​Play the classic memory game: Simon. Don't forget to turn your sound on!",
    view: "https://reyaviles.github.io/Simon_Game/",
    source: "https://github.com/reyaviles/Simon_Game",
    category: "JavaScript",
  },
  {
    imgsrc: pika,
    title: "3D Gif Boxes",
    text:
      "​This Style-heavy project was inspired by my work with LED walls, where each tile is programmed to be a specific quadrant of an image. This program expands that to incorporate an animation upon clicking the 'Magic' button. Try and time the click with the slap for enhanced effect.",
    view: "https://reyaviles.github.io/3D_Boxes/",
    source: "https://github.com/reyaviles/3D_Boxes",
    category: "HTML/CSS",
  },
  {
    imgsrc: weather,
    title: "Basic Weather App",
    text:
      "​​This unstylized app uses API calls to OpenWeatherMap. Type in the city name and it'll return the current weather in Celcius.",
    view: "https://weather-project-reyrey.herokuapp.com/",
    source: "https://github.com/reyaviles/Weather-App",
    category: "BackEnd",
  },
  {
    imgsrc: colibrosa,
    title: "Colibrósa Prod. ECommerce",
    text:
      "​​Designed complete website with functional eCommerce powered by Wix. Client requested a straightforward UX. Website is fully responsive & tracks customer behavior",
    view:
      "https://docs.google.com/presentation/d/1D1Xc5N9AJv4C053aoEA767jj99oD8JEHyf2Pu68pKiQ/edit?usp=sharing",
    source: "https://www.colibrosaproductions.com/",
    category: "Web Dev",
  },
];

export default DevCardData;
