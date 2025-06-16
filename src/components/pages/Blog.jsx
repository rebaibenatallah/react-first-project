import React from "react";
import Heading from "../common/Heading";
import { blog } from "../data/dummydata";

function Blog() {
  return (
    <>
      <div className="blog">
        <div className="container">
          <Heading title="Blog" />
          <div className="content grid3">
            {blog.map((item, i) => (
              <div key={i} className="box">
                <div className="img">
                  <img src={item.cover} alt="" />{" "}
                </div>
                <div className="text">
                  <h3>{item.title}</h3>
                  <label>
                    By {item.author} {item.date}
                  </label>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
