import React, { useState, useCallback, useEffect } from "react";
import "../css/landing-page.css";
import ArtistInfo from "../components/ArtistInfo";
import { Link } from "react-router-dom";
import $api from "../helpers/api";
import debounce from "lodash.debounce";

const LandingPage = () => {
  const [artistInfo, setArtistInfo] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const getArtists = useCallback(async (search = "a") => {
    try {
      setLoading(true);
      const artists = await $api.$get("/search", { params: { q: search } });
      setArtistInfo([]);

      const map = artists.response.hits.reduce((acc, cur) => {
        return {
          ...acc,
          [cur.result.primary_artist.id]: cur.result.primary_artist.id,
        };
      }, {});

      await Promise.all(
        Object.keys(map).map(async (artist) => {
          const info = await $api.$get(`/artists/${artist}`);
          setArtistInfo((a) => [...a, info.response.artist]);
        })
      );
    } catch (error) {
      console.log("error getting artists", error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchArtist = useCallback(
    debounce((search) => {
      getArtists(search);
    }, 500),
    []
  );

  useEffect(() => {
    getArtists();
  }, [getArtists]);

  const handleChange = (e) => {
    setText(e.target.value);
    searchArtist(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchArtist(text);
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
        <div className="card-flex">
          {artistInfo
            .filter((a, i, arr) => arr.map((i) => i.id).indexOf(a.id) === i)
            .map((info) => {
              return (
                <div className="card artiste-details-section" key={info.id}>
                  <img
                    src={info.image_url}
                    class="card-img-top artiste-image"
                    alt="sia"
                  />
                  <div class="card-img-overlay d-flex flex-column">
                    <h5 class="card-title">{artistInfo.name}</h5>
                  </div>
                  <div class="card-body artiste-details">
                    <p className="card-text artiste-name">{info.name}</p>
                    <p className="card-text artiste-description">
                      Facebook: {info.facebook_name}
                      {/* {info.description.dom.children[0].children[0]} */}
                    </p>
                    <div className="view-more-button-section">
                      <Link to="/SingleArtist/:id">
                        <button className="view-more-button"> View more</button>
                      </Link>
                    </div>
                    <ArtistInfo artistInfo={artistInfo} />
                  </div>
                </div>
              );
            })}
        </div>
        {!artistInfo.length && loading ? (
          <div
            style={{
              width: "100%",
              minHeight: "60vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading Data...
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              minHeight: "60vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No Data
          </div>
        )}
      </div>
    </div>
  );
};
export default LandingPage;
