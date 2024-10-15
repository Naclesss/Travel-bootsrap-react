import React, { Component } from 'react';

class Activities extends Component {
  render() {
    return (
      <div className="activity py-4">
        <div className="container-fluid">
          <div className="row py-3 px-5 g-3">
            <div className="col-12 col-md-4">
              <div className="section">
                <h2 className="mb-4">Browse Tours By Activity</h2>
                <p>Outdoor Activities</p>
                <p>Cultural &amp; Thematic Tours</p>
                <p>Family Friendly Tours</p>
                <p>Holiday &amp; Seasonal Tours</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="section-2">
                <p>City Tours</p>
                <p>Indulgence &amp; Luxury Tours</p>
                <p>Relaxation Tours</p>
                <p>Wild &amp; Adventure Tours</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="news-letter">
                <h2 className="mb-4">Newsletter</h2>
                <p className="mb-4" style={{ color: '#c0c0c0' }}>Subscribe for updates &amp; promotions</p>
                <div className="subscripe-part d-flex gap-4 align-items-center">
                  <input
                    type="text"
                    className="form-control"
                    id="autoSizingInputGroup"
                    placeholder="Enter a valid email address"
                  />
                  <button type="button" className="btn btn-secondary btn-lg">Submit</button>
                </div>
                <div className="contacts d-flex gap-4 mt-3">
                  <i className="fa-brands fa-facebook-f" />
                  <i className="fa-brands fa-x-twitter" />
                  <i className="fa-brands fa-instagram" />
                  <i className="fa-brands fa-youtube" />
                  <i className="fa-brands fa-linkedin" />
                  <i className="fa-brands fa-google-plus-g" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activities;
