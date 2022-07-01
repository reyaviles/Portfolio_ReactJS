import React, { useState } from "react";
import DesignCardData from "../components/DesignCardData";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Work from "../components/WorkDev";
import FilterBtn from "../components/FilterBtn";

const allCategories = [
  "All",
  ...new Set(DesignCardData.map((item) => item.category)),
];

const Design = () => {
  const [menuItem, setMenuItem] = useState(DesignCardData);
  const [buttons] = useState(allCategories);

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(DesignCardData);
      return;
    }
    const filteredData = DesignCardData.filter(
      (item) => item.category === button
    );
    setMenuItem(filteredData);
  };

  return (
    <div class="ng-view" autoscroll="true">
      <Navbar />
      <Hero2 heading="Design" text="A list of creative work" />
      <FilterBtn button={buttons} filter={filter} />
      <Work menuItem={menuItem} />
      <Footer />
    </div>
  );
};

export default Design;
