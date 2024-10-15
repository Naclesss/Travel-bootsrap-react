import React, { Component } from 'react';

class Discounts extends Component {
  render() {
    return (
      <div className="discount">
        <div className="discount-overlay">
          <div className="discount-content d-flex flex-column align-items-end justify-content-center px-5">
            <h2 className="mb-4" style={{ textAlign: 'end' }}>Discount 10-30% Off</h2>
            <p className="mb-5">
              Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Duis mollis,
              est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            </p>
            <button type="button" className="btn btn-secondary btn-lg">
              see tours
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Discounts;
