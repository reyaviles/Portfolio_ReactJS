import "./WorkDevStyles.css";

import React from "react";
import WorkCard from "./WorkCard";

const WorkDev = ({ menuItem }) => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {menuItem.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
              category={val.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkDev;
