import React, { useState } from 'react'
import Form from '../components/Form'
import '../css/landing-page.css'
import Sia from '../images/sia.jpg'
import Image1 from '../images/sia.jpg'
import Image2 from '../images/celine dion.jpg'
import Image3 from '../images/aquerio.jpg'
import axios from 'axios'
import ArtistInfo from '../components/ArtistInfo'

// let API = "2268a7a061msh4037261da8c73fdp1c2c5bjsnb67878ef66d3";

const LandingPage = () => {
  const [artistInfo, setArtistInfo] = useState([])
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  var options = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/search',
    params: { q: 'Kendrick Lamar' },
    headers: {
      'x-rapidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': '2268a7a061msh4037261da8c73fdp1c2c5bjsnb67878ef66d3',
    },
  }

  const fetchSongs = async (text) => {
    setLoading(true)
    const { data } = await axios.get(
      `https://genius.p.rapidapi.com/search?q=${text}`,
      options,
    )
    console.log(data.response.hits)
    setArtistInfo(data.response.hits)
    setLoading(false)
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchSongs(text)
  }

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
          <div className="card artiste-details-section">
            <img src={Sia} class="card-img-top artiste-image" alt="sia" />
            <div class="card-img-overlay d-flex flex-column">
              <h5 class="card-title">{artistInfo.name}</h5>
            </div>
            <div class="card-body artiste-details">
              <p className="card-text artiste-name">Celine Dion</p>
              <p className="card-text artiste-description">
                Sia Kate Isobelle Furler is an Australian singer and songwriter.
                She started her career as a singer in the acid jazz band Crisp
                in the mid-1990s in Adelaide.
              </p>
              <div className="view-more-button-section">
                <button className="view-more-button"> View more</button>
              </div>
              <ArtistInfo artistInfo={artistInfo} />
            </div>
          </div>
          <div className="card artiste-details-section">
            <img src={Image2} class="card-img-top artiste-image" alt="sia" />
            <div className="card-body artiste-details">
              <p className="card-text artiste-name">Celine Dion</p>
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
            <img src={Image3} class="card-img-top artiste-image" alt="sia" />
            <div className="card-body artiste-details">
              <p className="card-text artiste-name">Christianah Aquerio</p>
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
        </div>
      </div>
    </div>
  )
}
export default LandingPage
