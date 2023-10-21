import React, { Component } from "react";

export class ClubPlayers extends Component {
  render() {
    const { players } = this.props;
    return (
      <>
        <div className="block p-5 ">
          <h3 className="text-center">Players</h3>
          <ul className="list-group">
            {players.map((player, index) => (
              <li className="list-group-item bg-warning-subtle p-3" key={index}>
                <span className="fw-bold">{player}</span>
                <br />
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
