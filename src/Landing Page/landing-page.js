import React from "react";
import "../css/landing-page.css";
import Image1 from "../images/sia.jpg";
import Image2 from "../images/celine dion.jpg"
import Image3 from "../images/aquerio.jpg"

const LandingPage = () => {
  return (
    <div className="home-section">
      <nav className="navbar navbar-expand-lg  default-layout__inner">
        <div className="container py-3">
          <h1 className="navbar-logo">RockifyMusic</h1>
        </div>
      </nav>
      <div className=" hero-section">
        <div className="input-searchbar-section">
          <input className="input-search" placeholder="Search for artiste" />
          <i className="bi bi-search search-icon"></i>
        </div>
        <div className="card-flex">
        <div className="card artiste-details-section">
          <img src={Image1} class="card-img-top artiste-image" alt="sia" />
          <div className="card-img-overlay d-flex flex-column">
            <h5 className="card-title">Sia</h5>
            <div className="image-overlay"></div>
          </div>
          
          <div className="card-body artiste-details">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
         <div className="card artiste-details-section">
          <img src={Image2} class="card-img-top artiste-image" alt="celion-dion" />
          <div className="card-img-overlay d-flex flex-column">
            <h5 className="card-title">Sia</h5>
            <div className="image-overlay"></div>
          </div>
          
          <div className="card-body artiste-details">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
         <div className="card artiste-details-section">
         <div className="image-section">
          <img src={Image3} class="card-img-top artiste-image" alt="sia" />
         </div>
          <div className="card-img-overlay d-flex flex-column">
            <h5 className="card-title">Sia</h5>
            <div className="image-overlay"></div>
          </div>
          
          <div className="card-body artiste-details">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
