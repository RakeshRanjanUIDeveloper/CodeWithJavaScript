import React, { useState } from "react";

const ImproveTab = () => {
  const [activeTab, setActiveTab] = useState("heroes");

  const characters = {
    heroes: [
      {
        name: "IRON MAN",
        powers: "Genius,Rich,IRON Suit",
        costume: "IRON MAN suit",
      },
      { name: "ANT MAN", powers: "Ant man suit", costume: "Ant man suit" },
      {
        name: "Spider-man",
        powers: "Reflexes,Speed,Spider-Sense",
        costume: "Spider Suit",
      },
      { name: "Bat man", powers: "Rich,Bat suit", costume: "Bat Suit" },
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
        powers: "Shapeshifting and camouflage",
        costume: "Black suit",
      },
      {
        name: "Kang the conqueror",
        powers: "Time travel, can access all tech",
        costume: "Kang armor",
      },
      {
        name: "Joker",
        powers: "Clownlike appearance and sick humour",
        costume: "Joker costume",
      },
    ],
  };

  const tabOptioons = ["heroes", "villains"];
  const currentList = characters[activeTab];
  return (
    <div className="tab-wrapper">
      <div className="tab-buttons">
        {tabOptioons.map((tab) => (
          <div
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            Show {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>
      <div className="tab-contents">
        <div className="tab-content">
          {currentList.map((char, index) => (
            <div key={index}>
              <h2>{char.name}</h2>
              <p>
                <strong>Powers:</strong> {char.powers}
              </p>
              <p>
                <strong>Costume:</strong> {char.costume}
              </p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImproveTab;
