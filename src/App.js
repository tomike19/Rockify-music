import './App.css'
import { Route, Routes } from 'react-router-dom'
import SingleArtist from './SingleArtistDetailsPage/singleArtist'
import LandingPage from './Landing Page/landing-page'

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="SingleArtist"
          element={<SingleArtist />}
        />
      </Routes>
    </div>
  )
}

export default App
