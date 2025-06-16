import React from "react";
import { portfolio } from "../data/dummydata";
import { useState } from "react";
import { Visibility } from "@mui/icons-material";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];
function Portfolio() {
  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setList(newItems);
    if (category === "all") {
      setList(portfolio);
    }
  };
  return (
    <>
      <article>
        <div className="container">
          <div className="catButton">
            {category.map((category, i) => (
              <button
                key={i}
                className="primaryBtn"
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="content grid3">
            {list.map((item, i) => (
              <div className="box" key={i}>
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <Visibility />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}

export default Portfolio;
