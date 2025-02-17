import React from "react";
import "./Blog.css";
import Menu from "./Menu";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <div className="blog__container grid">
        {Menu.map((elem) => {
          const { id, image, title, category, url, Date } = elem;
          return (
            <div className="blog__card" key={id}>
              <div className="blog__thumb">
                {" "}
                <a href={url}>
                  <span className="blog__category">{category}</span>
                </a>
                <a href={url}>
                  <img src={image} alt="" className="blog__img" />
                </a>
              </div>
              <div className="blog__details">
                <h3 className="blog__title">{title}</h3>
                <div className="blog__meta">
                  <span>{Date}</span>
                  <span className="blog__dot">.</span>
                  <span>Hasindu</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

//replce above card with MENU compent items

export default Blog;
