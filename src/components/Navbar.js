import React from 'react'
import PropTypes from 'prop-types'
import "../Theme.css"
import { Link } from "react-router-dom";
export default function Navbar(props) {
  console.log('Its working')


    return (
       <>
      
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
       
    
      </ul>
      

<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toogleModePurple} />
  <label className={`form-check-label text-${props.mode==='purple'?'info':'info'}`} htmlFor="flexSwitchCheckDefault">Purple Mode</label>
</div>

<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toogleModeBlue} />
  <label className={`form-check-label text-${props.mode==='blue'?'primary':'primary'}`} htmlFor="flexSwitchCheckDefault">Blue Mode</label>
</div>

<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toogleModeGreen} />
  <label className={`form-check-label text-${props.mode==='green'?'success':'success'}`} htmlFor="flexSwitchCheckDefault">Green Mode</label>
</div>





      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toogleMode} />
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>



</div>

    </div>
  </div>
</nav>


</>

    )
}

Navbar.propTypes= {title:PropTypes.string.isRequired,aboutText:PropTypes.string}

Navbar.defaultProps = {
    title:'SET TITLE HERE',
    aboutText : 'Set About us'
}