import React from "react";
import "../css/singleartist.css";
import Sia from "../images/sia-img-header.jpg";

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
          <div class="artist-details-container">
            <img src={Sia} alt="artist-img" class="artist-img" />
            <div class="artist-details mt-4">
              <h2 class="artist-name text-center">Sia</h2>
              <p class="album-title text-center">Song Title</p>
            </div>
          </div>
          <h2 class="fw-light">Page Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus ab nulla dolorum autem nisi officiis blanditiis
            voluptatem hic, assumenda aspernatur facere ipsam nemo ratione
            cumque magnam enim fugiat reprehenderit expedita.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SingleArtist;
