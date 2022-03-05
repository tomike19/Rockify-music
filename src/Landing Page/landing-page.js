import React, { useState } from "react";
import Form from "../components/Form";
import "../css/landing-page.css";
import Sia from "../images/sia.jpg";
import axios from "axios";
import ArtistInfo from "../components/ArtistInfo";

// let API = "2268a7a061msh4037261da8c73fdp1c2c5bjsnb67878ef66d3";

const LandingPage = () => {
  const [artistInfo, setArtistInfo] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  var options = {
    method: "GET",
    url: "https://genius.p.rapidapi.com/search",
    params: { q: "Kendrick Lamar" },
    headers: {
      "x-rapidapi-host": "genius.p.rapidapi.com",
      "x-rapidapi-key": "2268a7a061msh4037261da8c73fdp1c2c5bjsnb67878ef66d3",
    },
  };

  const fetchSongs = async (text) => {
    setLoading(true);
    const { data } = await axios.get(
      `https://genius.p.rapidapi.com/search?q=${text}`,
      options
    );
    console.log(data.response.hits);
    setArtistInfo(data.response.hits);
    setLoading(false);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSongs(text);
  };

  return (
    <div className="home-section">
      <nav className="navbar navbar-expand-lg  default-layout__inner">
        <div className="container py-3">
          <h1 className="navbar-logo">RockifyMusic</h1>
        </div>
      </nav>
      <div className=" hero-section">
        {/* <Form/> */}
        <form onSubmit={handleSubmit}>
          <div className="input-searchbar-section">
            <input
              className="input-search"
              placeholder="Search for artiste"
              value={text}
              onChange={handleChange}
            />
            <i className="bi bi-search search-icon"></i>
          </div>
        </form>

        <div className="card artiste-details-section">
          <img src={Sia} class="card-img-top artiste-image" alt="sia" />
          <div class="card-img-overlay d-flex flex-column">
            <h5 class="card-title">{artistInfo.name}</h5>
          </div>
          <div class="card-overlay"></div>
          <div class="card-body artiste-details">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              <ArtistInfo artistInfo={artistInfo} />
            </p>
          </div>
        </div>
      </div>
      </div>
    )
  }
export default LandingPage
