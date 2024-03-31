import React from "react";
import { blog } from "../Data";
const Blog = () => {
  return (
    <div>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          Our <span>Blog</span>
        </h1>
        <div className="box-container">
          {blog.map((item, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={item.img} alt="" />
                </div>
                <div className="content">
                  <a href="#/" className="title">
                    Tasty and Refreshing
                  </a>
                  <span>By Admin / 21st May, 2022 </span>
                  <p className="">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..</p>
                < a className="btn" href="#/">Read More</a>
                </div>
              </div>
         
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
