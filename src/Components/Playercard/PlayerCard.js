import React from "react";
import PlayerImage from "../../images/player.png";

function PlayerCard(props) {
  return (
    <div className="card">
      <div className="card-player-image-box">
        <img src={PlayerImage} alt="Player" className="card-player-image" />
      </div>
      <div className="card-player-stats">
        <h1 className="card-player-name">
          {props.name}
          <span className="card-player-name-jersey">{props.jersy}</span>
        </h1>
        <div className="card-player-info">
          <div className="card-player-info-body">
            <div className="info-card">
              <h3>Weight</h3>
              <h2>
                {props.weight} <span className="short-text">lbs</span>
              </h2>
            </div>
            <div className="info-card">
              <h3>height</h3>
              <h2>{props.weight}</h2>
            </div>
          </div>
          <div className="card-player-info-body">
            <div className="info-card">
              <h3>PPG</h3>
              <h2>{props.ppg}</h2>
            </div>
            <div className="info-card">
              <h3>Fans</h3>
              <h2>
                {props.fans} <span>mn</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
