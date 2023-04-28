import React from "react";
import "./collection.scss";
import collectionImg from "../../assets/Dashboards.png";
import collectionImgPortraits from "../../assets/Portraits.png";
import collectionImgMalayalam from "../../assets/Malayalam.png";


export default function collection() {
  return (
    //---- Collection-section ----/
    <section className="collection-section">
      <div className="container">
        <div className="collection-section__wrapper">
          <h3 className="collection-section__title">Featured works</h3>
          <div className="collection-section__content">
            <div className="collection-section__card-banner">
              <div className="collection-section__card-img">
                <img className="collection-section__img" width="246" height="180" src={collectionImg} alt="Designing Dashboards" />
              </div>
              <div className="collection-section__card">
                <h2 className="collection-section__card-title">
                  Designing Dashboards
                </h2>
                <span className="collection-section__card-num">2020</span>
                <span className="collection-section__card-num--text">Dashboard</span>
                <p className="collection-section__card-text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
              <span className="collection-section__card-line"></span>
          </div>
          <div className="collection-section__content">
            <div className="collection-section__card-banner">
              <div className="collection-section__card-img">
                <img className="collection-section__img" width="246" height="180" src={collectionImgPortraits} alt="Designing Dashboards" />
              </div>
              <div className="collection-section__card">
                <h2 className="collection-section__card-title">
                Vibrant Portraits of 2020
                </h2>
                <span className="collection-section__card-num">
                  2018
                </span>
                <span className="collection-section__card-num--text">Illustration</span>
                <p className="collection-section__card-text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
              <span className="collection-section__card-line"></span>
          </div>
          <div className="collection-section__content">
            <div className="collection-section__card-banner">
              <div className="collection-section__card-img">
                <img className="collection-section__img" width="246" height="180" src={collectionImgMalayalam} alt="Designing Dashboards" />
              </div>
              <div className="collection-section__card">
                <h2 className="collection-section__card-title">
                36 Days of Malayalam type
                </h2>
                <span className="collection-section__card-num">
                  2018
                </span>
                <span className="collection-section__card-num--text">Typography</span>
                <p className="collection-section__card-text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
              <span className="collection-section__card-line"></span>
          </div>
        </div>
      </div>
    </section>
  );
  //---- Collection-section end ----// 
}
