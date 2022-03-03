import React from "react";
import "../css/landing-page.css";
import Sia from "../images/sia.jpg";

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
        <div className="card artiste-details-section">
          <img src={Sia} class="card-img-top artiste-image" alt="sia" />
          <div class="card-img-overlay d-flex flex-column">
            <h5 class="card-title">Sia</h5>
          </div>
          <div class="card-overlay"></div>
          <div class="card-body artiste-details">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
