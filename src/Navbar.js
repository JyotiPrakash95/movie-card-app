import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <div className="left">
          <img
            src="https://www.freepnglogos.com/uploads/marvel-logo-png/marvel-kyln-disney-wiki-fandom-powered-wikia-21.png"
            width={200}
            alt="marvel-logo"
          />
        </div>
        <div className="cart-div">
          <span className="cart-img">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3643/3643914.png"
              width={50}
            />
          </span>
          <span className="cart-text">
            <p>3</p>
          </span>
        </div>
      </div>
    );
  }
}

export default Navbar;
