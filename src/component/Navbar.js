import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.giri}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.homeChange}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutsText}
              </a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode=== 'light'? 'Dark' : 'light'}`}>
<input className= "form-check-input"onClick={props.toggleMode} type="checkbox" id= "flexSwitchCheckDefault" />
<label className= "form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
</div>

        </div>
      </div>
    </nav>
  );
}

// check for conditon if not send wrong props
Navbar.propTypes = {
  giri: PropTypes.string.isRequired,
  aboutsText: PropTypes.string,
};
