import React from "react";
import johnImg from "../../assets/Ellipse.png"
import './main.scss'
export default function tana() {
  return (
    <div>
      <main className="main">
        <section className="hero-section">
          <div className="container hero">
            <div className="hero-section__wrapper">
              <div className="hero-section__content">
                <h2 className="hero-section__title">
                  Hi, I am John, Creative Technologist
                </h2>
                <p className="hero-section__text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <a href="#" className="hero-section__btn">
                    Download Resume
                </a>
              </div>
              <div className="hero-section__content-img">
                <img className="hero-section__img" src={johnImg} alt="John" width={240} height={240}/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
