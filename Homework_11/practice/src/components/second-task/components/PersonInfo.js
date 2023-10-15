import './PersonalInfo.css'
import React, { Component } from "react";

class PersonInfo extends Component{
  render() {
    const { name, birthDate, portrait, biography } = this.props;

    return (
      <>
        <div className="d-flex p-4 ">
        <div className="col-lg-4 d-flex flex-column align-items-center">
          <img src={portrait} alt="portrait" />
        </div>
        <div id="info" className="col-md-7 ms-5 d-flex flex-column">
          <div className="d-flex justify-content-between w-100 ">
            <p>Повне ім'я:</p>
            <p>{name}</p>
          </div>

          <div className="d-flex justify-content-between w-100">
            <p>Дата народження:</p>
            <p>{birthDate}</p>
          </div>

          <div className="mt-4">
            <h4>Біографія</h4>
            <p>{biography}</p>
          </div>
        </div>
      </div>
      </>
    );
  }
};

export default PersonInfo;