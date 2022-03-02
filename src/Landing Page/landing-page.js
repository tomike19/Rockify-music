import React from 'react';
import '../css/landing-page.css'
const LandingPage  = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg  default-layout__inner">
      <div className="container py-3">
        <h1 className="navbar-logo">RockifyMusic</h1>
       
      
      </div>
    </nav>
    <div className=' home-section'>
    <div className="input-searchbar-section">
     <input className='input-search'/>
     <i className="bi bi-search search-icon"></i>
    </div>
    </div>
        </div>
    );
}
 
 
export default LandingPage  ;