import React from "react";
import PlayerCard from "../Playercard/PlayerCard";

function Team() {
  return (
    <section id="team" className="section-team">
      <h1 className="team-heading heading">Our Team</h1>
      <div className="row row-sm center card-section">
        <div className="col-1-2">
          <PlayerCard
            name="jhon smith"
            jersy="5"
            weight="228"
            height="6-8"
            ppg="7.6"
            fans="3"
          />
        </div>
        <div className="col-1-2">
          <PlayerCard
            name="jhon smith"
            jersy="5"
            weight="228"
            height="6-8"
            ppg="7.6"
            fans="3"
          />
        </div>
      </div>
      <div className="row row-sm center card-section">
        <div className="col-1-2">
          <PlayerCard
            name="jhon smith"
            jersy="5"
            weight="228"
            height="6-8"
            ppg="7.6"
            fans="3"
          />
        </div>
        <div className="col-1-2">
          <PlayerCard
            name="jhon smith"
            jersy="5"
            weight="228"
            height="6-8"
            ppg="7.6"
            fans="3"
          />
        </div>
      </div>
      <div className="row row-sm center card-section">
        <div className="col-1-2">
          <PlayerCard
            name="jhon smith"
            jersy="5"
            weight="228"
            height="6-8"
            ppg="7.6"
            fans="3"
          />
        </div>
      </div>
    </section>
  );
}

export default Team;
