import React, { Component } from 'react';

class Countries extends Component {
  render() {
    return (
      <div className="countries pb-4" style={{ backgroundColor: '#e9f2fa' }}>
        <div className="title text-center pt-5 pb-3 mb-3">
          <h1 className="mb-3">Start Your Journey</h1>
          <p>The most searched countries in March</p>
        </div>
        <div className="container-fluid choices pb-5">
          <div className="row g-3 px-5 mx-lg-5">
            <div className="col-12 col-md-4">
              <div className="country">
                <img
                  src="https://images01.nicepage.com/28/58/2858f3748a025304669419b5dbd89dd3.jpeg"
                  className="img-fluid"
                />
                <div className="country-content">
                  <i className="fa-solid fa-location-dot" />
                  <p>Santorini, Greece</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="country">
                <img
                  src="https://images01.nicepage.com/9e/af/9eaf6a4d06c28cd9596d0b792f4780b5.jpeg"
                  className="img-fluid"
                />
                <div className="country-content">
                  <i className="fa-solid fa-location-dot" />
                  <p>Vernazza, Italy</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="country">
                <img
                  src="https://images01.nicepage.com/2f/c9/2fc963db2b8f554519a2b21cc60d75a3.jpeg"
                  className="img-fluid"
                />
                <div className="country-content">
                  <i className="fa-solid fa-location-dot" />
                  <p>San Francisco</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="country">
                <img
                  src="https://images01.nicepage.com/ef/2a/ef2a13068362a84ceee3efa5eaab583b.jpeg"
                  className="img-fluid"
                />
                <div className="country-content">
                  <i className="fa-solid fa-location-dot" />
                  <p>Navagio, Greece</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="country">
                <img
                  src="https://images01.nicepage.com/29/8d/298d0a5cd8893ec3a947289a7347c9f0.jpeg"
                  className="img-fluid"
                />
                <div className="country-content">
                  <i className="fa-solid fa-location-dot" />
                  <p>Ao Nang, Thailand</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="country">
                <img
                  src="https://images01.nicepage.com/6e/8c/6e8c81f6a006352a225d163d742b148c.jpeg"
                  className="img-fluid"
                />
                <div className="country-content">
                  <i className="fa-solid fa-location-dot" />
                  <p>Phi Phi Islands, Thailand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Countries;
