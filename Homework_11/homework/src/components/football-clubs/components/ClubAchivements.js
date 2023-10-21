import React, { Component } from "react";

export class ClubAchivements extends Component {
  render() {
    const { trophies, stats } = this.props;
    
    return (
      <>
        <div className="block mb-5">
          <h3 className="text-center">Stats</h3>
          <div className="d-flex align-items-center justify-content-center mt-3 w-100">
            <div className="col-lg-8 d-flex flex-column">
              <div className="d-flex justify-content-between w-100">
                <p>Matches:</p>
                <p>{stats.matches}</p>
              </div>
              <div className="d-flex justify-content-between w-100">
                <p>Wins:</p>
                <p>{stats.wins}</p>
              </div>
              <div className="d-flex justify-content-between w-100">
                <p>Losses:</p>
                <p>{stats.losses}</p>
              </div>
              <div className="d-flex justify-content-between w-100">
                <p>Goals:</p>
                <p>{stats.goals}</p>
              </div>
            </div>
          </div>
        </div>
        {
          <div className="block p-5 mb-5">
            <h3 className="text-center">Trophies</h3>
            <ul className="list-group">
              {trophies.map((trophy, index) => (
                <li
                  className="list-group-item bg-warning-subtle p-3"
                  key={index}
                >
                  <span className="fw-bold">{trophy}</span>
                  <br />
                </li>
              ))}
            </ul>
          </div>
        }
      </>
    );
  }
}
