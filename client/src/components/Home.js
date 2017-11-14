import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    return (
      <div id="home-page">
        <div className="product-list">
          <div className="col-md-4">
            <div className="product">

              <div className="product-img" style={{background: "url('images/poloshirt.png') no-repeat center center"}}>
                <div className="cart-btn">
                  <button>Add To Cart</button>
                </div>
              </div>

              <div className="bottom-info">
                <span className="price">Price</span>
                <span className="location">Jordan Retro</span>
              </div>

            </div>
          </div>
        </div>
        {/* <div className="col-md-12 col-lg-6">
          <div className="listing">

            <div className="listing-img" style={{background: "url('images/poloshirt.png') no-repeat center center"}}>
              <span className="address">Hey</span>
            </div>

            <div className="bottom-info">
              <span className="price">Price</span>
              <span className="location"> <i className="ion ion-ios-location"></i> Hello, Hello</span>
            </div>

          </div>
        </div> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {};
}

export default connect(mapStateToProps)(Home);
