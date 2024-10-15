import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="px-lg-5">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-4 mx-lg-5" aria-label="Offcanvas navbar large">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ fontSize: 30 }}>Travel.co</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar2"
              aria-controls="offcanvasNavbar2"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
              <div className="offcanvas-header">
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contacts</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Page 1</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Page 3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div className="header-content px-5 mx-5 d-flex justify-content-center flex-column">
          <div className="hero-part">
            <h1 style={{ fontSize: 96 }}>Travel</h1>
            <p style={{ fontSize: 22 }}>
              Here are my favorite travel and adventure quotes, paired with images from my journeys around the world.
            </p>
            <button type="button" className="btn btn-secondary btn-lg">
              read more
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
