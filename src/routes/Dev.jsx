import React, { useState } from "react";
import DevCardData from "../components/DevCardData";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Work from "../components/WorkDev";
import FilterBtn from "../components/FilterBtn";

const allCategories = [
  "All",
  ...new Set(DevCardData.map((item) => item.category)),
];

const Dev = () => {
  const [menuItem, setMenuItem] = useState(DevCardData);
  const [buttons] = useState(allCategories);

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(DevCardData);
      return;
    }
    const filteredData = DevCardData.filter(
      (item) => item.category === button
    );
    setMenuItem(filteredData);
  };

  return (
    <div>
      <Navbar />
      <Hero2 heading="Development" text="A list of technical work" />
      <FilterBtn button={buttons} filter={filter} />
      <Work menuItem={menuItem} />
      <Footer />
    </div>
  );
};

export default Dev;
