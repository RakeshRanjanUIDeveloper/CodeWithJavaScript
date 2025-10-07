import React, { useState } from "react";
import "./Tab.css";
const Tab = () => {
  const [showHeroesContents, setShowHeroesContents] = useState(true);
  const [showVillainsContents, setShowVillainsContents] = useState(false);
  const characters = {
    heroes: [
      {
        name: "IRON MAN",
        powers: "Genius,Rich,IRON Suit",
        costume: "IRON MAN suit",
      },
      {
        name: "ANT MAN",
        powers: "Ant man suit",
        costume: "Ant man suit",
      },
      {
        name: "Spider-man",
        powers: "Reflexes,Speed,Spider-Sense",
        costume: "Spider Suit",
      },
      {
        name: "Bat man",
        powers: "Rich,Bat suit",
        costume: "Bat Suit",
      },
      {
        name: "Super-man",
        powers: "Superhuman strength,Reflexes,Speed",
        costume: "Superman Suit",
      },
    ],
    villains: [
      {
        name: "Thanos",
        powers: "Superhuman strength,Reflexes,Speed,",
        costume: "Metal armor",
      },
      {
        name: "Venom",
        powers: "shapeshifting and camouflage Symbiotes autonomous defense",
        costume: "black suit",
      },
      {
        name: "Kang the conqueror",
        powers: "time travel, can access all tech",
        costume: "kang armor",
      },
      {
        name: "Joker",
        powers: "clownlike appearance and sick humour",
        costume: "Joker costume",
      },
    ],
  };

  const handleTabActive = (title) => {
    if (title === "heroes") {
      setShowHeroesContents(true);
      setShowVillainsContents(false);
    }
    if (title === "villains") {
      setShowVillainsContents(true);
      setShowHeroesContents(false);
    }
  };


  return (
    <React.Fragment>
      <div className="tab-wrapper">
        <div className="tab-buttons">
          <div className="tab-button" onClick={() => handleTabActive("heroes")}>
            Show Heroes
          </div>
          <div
            className="tab-button"
            onClick={() => handleTabActive("villains")}
          >
            Show Villains
          </div>
        </div>
        <div className="tab-contents">
          <div className="tab-content">
            {showHeroesContents &&
              characters.heroes.map((h, index) => (
                <div key={index}>
                  <h2>{h.name}</h2>
                  <p>
                    <strong>Powers:</strong> {h.powers}
                  </p>
                  <p>
                    <strong>Costume:</strong> {h.costume}
                  </p>
                  <hr />
                </div>
              ))}
            {showVillainsContents &&
              characters.villains.map((h, index) => (
                <div key={index}>
                  <h2>{h.name}</h2>
                  <p>
                    <strong>Powers:</strong> {h.powers}
                  </p>
                  <p>
                    <strong>Costume:</strong> {h.costume}
                  </p>
                  <hr />
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tab;
