import React from 'react'
import '../css/landing-page.css'
import Image1 from '../images/sia.jpg'
import Image2 from '../images/celine dion.jpg'
import Image3 from '../images/aquerio.jpg'

const LandingPage = () => {
  return (
    <div className="home-section">
      <nav className="navbar navbar-expand-lg  default-layout__inner">
        <div className="container py-3">
          <h1 className="navbar-logo"> RockifyMusic </h1>
        </div>
      </nav>
      <div className=" hero-section">
        <div className="input-searchbar-section">
          <input className="input-search" placeholder="Search for artiste" />
          <i className="bi bi-search search-icon"> </i>
        </div>
        <div className="card-flex">
          <div className="card artiste-details-section">
            <img src={Image1} class="card-img-top artiste-image" alt="sia" />

            <div className="card-body artiste-details">
              <p className="card-text artiste-name">Sia </p>
              <p className="card-text artiste-description">
                Sia Kate Isobelle Furler is an Australian singer and songwriter.
                She started her career as a singer in the acid jazz band Crisp
                in the mid-1990s in Adelaide.
              </p>
              <div className="view-more-button-section">
                <button className="view-more-button"> View more</button>
              </div>
            </div>
          </div>
          <div className="card artiste-details-section">
            <div>
              <img
                src={Image2}
                class="card-img-top artiste-image"
                alt="celion-dion"
              />
            </div>

            <div className="card-body artiste-details">
              <p className="card-text">Celine Dion </p>
              <p className="card-text artiste-description">
                Céline Marie Claudette Dion CC OQ is a Canadian singer. She is
                noted for her powerful and technically skilled vocals.Dion is
                the best-selling Canadian recording artist.
              </p>
              <div className="view-more-button-section">
                <button className="view-more-button"> View more</button>
              </div>
            </div>
          </div>
          <div className="card artiste-details-section">
            <div className="">
              <img src={Image3} class="card-img-top artiste-image" alt="sia" />
            </div>

            <div className="card-body artiste-details">
              <p className="card-text">Christina Aguilera</p>
              <p className="card-text artiste-description">
                Christina María Aguilera is an American singer, songwriter, and
                television personality. Known for her four-octave vocal range
                and ability to sustain high notes.
              </p>
              <div className="view-more-button-section">
                <button className="view-more-button"> View more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
