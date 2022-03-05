import React from "react";
import "../css/singleartist.css";
import Sia from "../images/sia-img-header.jpg";
import verifiedicon from "../images/verified-icon.png";

const SingleArtist = () => {
  return (
    <div>
      <header class="masthead">
        <div class="h-100">
          <div class="row">
            <div
              className="col-12 img-header"
              style={{
                background: `url(${Sia})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </header>

      <section class="py-5">
        <div class="container">
          <div class="artist-details-container row">
            <img src={Sia} alt="artist-img" class="artist-img col-6" />
          </div>
          <div class="artist-details mt-4">
            <h2 class="artist-name text-center">Sia</h2>
            <p class="album-title text-center">
              Acho Que Vou Gostar Daqui by Félix Ferrà
            </p>
          </div>
          <div class="artist-library d-flex justify-content-between">
              <img src={Sia} class="artiste-image" alt="sia" />
            <div class="">
              <h5 class="card-title">Sia</h5>
              <p class="-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleArtist;
