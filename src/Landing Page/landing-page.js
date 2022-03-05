import React, { useState, useCallback, useEffect } from 'react'
import '../css/landing-page.css'
import axios from 'axios'
import ArtistInfo from '../components/ArtistInfo'

// let API = "2268a7a061msh4037261da8c73fdp1c2c5bjsnb67878ef66d3";
const $api = {
  $axios: axios.create({
    baseURL: 'https://genius.p.rapidapi.com',
    headers: {
      'x-rapidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': '2268a7a061msh4037261da8c73fdp1c2c5bjsnb67878ef66d3',
    },
  }),
  async getArtists(params = {}) {
    const { data } = await this.$axios.get('/artists', { params })

    return data
  },
  async search(search) {
    const { data } = await this.$axios.get('/search', { params: { q: search } })

    return data
  },
  async getArtist(id) {
    const { data } = await this.$axios.get(`/artists/${id}`)

    return data
  },
}
const debounce = (func, wait) => {
  let timer
  let shouldInvoke
  const debounced = (...args) => {
    clearTimeout(timer)
    if (shouldInvoke) {
      shouldInvoke = false
      return func(...args)
    }

    timer = setTimeout(() => {
      shouldInvoke = true
      debounced(...args)
    }, wait)
  }

  return debounced
}
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

  const getArtists = useCallback(async () => {
    try {
      setLoading(true)
      const artists = await $api.search('a')
      setArtistInfo([])

      const artistInfo = await Promise.all(
        artists.response.hits.map(async (artist) => {
          const info = await $api.getArtist(artist.result.primary_artist.id)
          setArtistInfo((a) => [...a, info.response.artist])
          console.log(info.response.artist)
          // return info.response.artist
        }),
      )
      console.log(artistInfo)
      // setArtistInfo(artistInfo)
    } catch (error) {
      console.log('error getting artists', error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleSearch = useCallback(
    debounce(async (search) => {
      try {
        setLoading(true)
        const artists = await $api.search(search)
        setArtistInfo([])
        const artistInfo = await Promise.all(
          artists.response.hits.map(async (artist) => {
            const info = await $api.getArtist(artist.result.primary_artist.id)
            setArtistInfo((a) => [...a, info.response.artist])
            // return info.response.artist
          }),
        )
        console.log(artistInfo)
        // setArtistInfo(artistInfo)
      } catch (error) {
        console.log('error searching for artists', error.message)
      } finally {
        setLoading(false)
      }
    }, 500),
    [],
  )

  useEffect(() => {
    getArtists()
  }, [getArtists])

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
    handleSearch(text)
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
                      <button className="view-more-button"> View more</button>
                    </div>
                    <ArtistInfo artistInfo={artistInfo} />
                  </div>
                </div>
              )
            })}


             
        </div>
      </div>
    </div>
  )
}
export default LandingPage
