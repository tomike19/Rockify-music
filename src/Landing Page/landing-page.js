import React from 'react';
import '../css/landing-page.css'
 
const LandingPage  = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg  default-layout__inner">
      <div className="container py-3">
        <h1 className="navbar-logo">RockifyMusic</h1>
        <i
          className="navbar-toggler bi bi-list"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"></i>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-end mt-2 mb-lg-0">


              <li className="list-item p-2">
                Home
              </li>

              <li className="list-item p-2">
               About
              </li>
          <li className="list-item p-2">
               Pages
              </li>
                   <li className="list-item p-2">
              Contact
              </li>
          </ul>33
        </div>
      </div>
    </nav>
    <div className='home-section'>

    </div>
        </div>
    );
}
 
 
export default LandingPage  ;