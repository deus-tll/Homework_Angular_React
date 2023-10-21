import React, { Component } from "react";

export class ClubInfo extends Component {
  render() {
    const { name, city, founded, logo } = this.props;

    return (
      <div className="block mb-5">
        <h1 className="text-center mt-4 mb-4">Information About Artist</h1>
        <div className="d-flex align-items-center justify-content-center ">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="d-flex align-items-center justify-content-center mt-3 w-100">
          <div id="info" className="col-lg-8 d-flex flex-column">
            <div className="d-flex justify-content-between w-100">
              <p>Name:</p>
              <p>{name}</p>
            </div>
            <div className="d-flex justify-content-between w-100">
              <p>City:</p>
              <p>{city}</p>
            </div>
            <div className="d-flex justify-content-between w-100">
              <p>Founded:</p>
              <p>{founded}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
