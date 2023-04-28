import React from "react";
import "./info.scss";

export default function info() {
  return (
    //--- Info section ---//
    <section className="info-section">
      <div className="container info">
        <div className="info-section__posts">
          <a className="info-section__posts-text" href="#">
            Recent posts
          </a>
          <a className="info-section__posts-text-site" href="#">
            View all
          </a>
        </div>
        <div className="info-section__wrapper">
          <div className="info-section__content">
            <h3 className="info-section__title">
              Making a design system from scratch
            </h3>
            <span className="info-section__design">
              12 Feb 2020<span className="info-section__line"></span>{" "}
              <span className="info-section__design">Design, Pattern</span>
            </span>
            <p className="info-section__text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="info-section__content">
            <h3 className="info-section__title">
              Creating pixel perfect icons in Figma
            </h3>
            <span className="info-section__design">
              12 Feb 2020<span className="info-section__line"></span>{" "}
              <span className="info-section__design">Figma, Icon Design</span>
            </span>
            <p className="info-section__text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
