import React, { Component } from 'react';
import { ClubAchivements } from "./ClubAchivements";
import { ClubInfo } from "./ClubInfo";
import { ClubPlayers } from "./Players";

export class Club extends Component {
  render() {
    const {club, style} = this.props;

    return(
      <div style={style} className="mb-5 mt-5">
        <ClubInfo 
        name={club.name} 
        city={club.city} 
        founded={club.founded} 
        logo={club.logo} />
  
        <ClubAchivements
        trophies={club.trophies} 
        stats={club.stats} />
  
        <ClubPlayers 
        players={club.currentPlayers}/>
      </div>
    );
  }
};