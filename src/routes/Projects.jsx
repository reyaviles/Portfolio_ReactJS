import React, { useState } from "react";
import WorkCardData from "../components/WorkCardData";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Work from "../components/WorkDev";
import FilterBtn from "../components/FilterBtn";

const allCategories = [
  "All",
  ...new Set(WorkCardData.map((item) => item.category)),
];

const Projects = () => {
  const [menuItem, setMenuItem] = useState(WorkCardData);
  const [buttons] = useState(allCategories);

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(WorkCardData);
      return;
    }
    const filteredData = WorkCardData.filter(
      (item) => item.category === button
    );
    setMenuItem(filteredData);
  };

  return (
    <div>
      <Navbar />
      <Hero2 heading="Projects" text="an ever-evolving list." />
      <FilterBtn button={buttons} filter={filter} />
      <Work menuItem={menuItem} />
      <Footer />
    </div>
  );
};

export default Projects;
