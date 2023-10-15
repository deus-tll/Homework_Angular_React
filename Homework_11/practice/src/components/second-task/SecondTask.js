import React, { Component } from "react";
import PersonInfo from "./components/PersonInfo";

class SecondTask extends Component{
  render() {
    const personData = {
      name: 'Yuki Kaji (梶 裕貴)',
      birthDate: 'September 3, 1985',
      portrait: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/27th_Tokyo_International_Film_Festival_Y%C5%ABki_Kaji.jpg/443px-27th_Tokyo_International_Film_Festival_Y%C5%ABki_Kaji.jpg',
      biography: "Japanese actor, voice actor and singer affiliated with the agency VIMS. He was part of the four-unit singing group G.Addict, which was part of the Goulart Knights project, and has acted as one of the main protagonists in the film Kami Voice: The Voice Makes a Miracle. He won the Best Rookie Actor Award in the 3rd Seiyu Awards. He won the Best Voice Actor Award two times consecutively at the 7th Seiyu Awards and 8th Seiyu Awards. He has hosted the web radio show Yuki Kaji's Monologue (梶裕貴のひとりごと, Kaji Yūki no Hitorigoto) since April 13, 2014. His variety show Kaji 100!: The 100 Things Yuki Kaji Wants to Do debuted on the Nitteleplus channel in April 2017. Kaji married Ayana Taketatsu on June 23, 2019. On June 30, 2022, he and Taketatsu announced that they were expecting their first child together. On November 3, 2022, the couple announced the birth of their child."
    };

    return (
      <>
        <h1 className="text-center">Famous Person</h1>
        <PersonInfo 
        name={personData.name} 
        birthDate={personData.birthDate}
        portrait={personData.portrait}
        biography={personData.biography} />
      </>
    );
  }
};

export default SecondTask;