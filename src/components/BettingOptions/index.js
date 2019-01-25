import React from "react";

const BettingOptions = () => {
  return (
    <div className="container">
      <div className="sport">
        <div className="sport-logo">
          <img
            src="icons/football.png"
            alt="football"
            height="20px"
            width="20px"
          />
        </div>
        <div className="sport-name">
          <p>FOOTBALL</p>
        </div>
      </div>
      <div className="betting-options">
        <div className="betting-options_parent">
          <div className="betting-options_parent__child">Next Goal</div>
        </div>

        <div className="betting-options_parent">
          <div className="betting-options_parent__child">Main Bets</div>
        </div>

        <div className="betting-options_parent">
          <div className="betting-options_parent__child">Handicaps</div>
        </div>

        <div className="betting-options_parent">
          <div className="betting-options_parent__child">Half Time</div>
        </div>

        <div className="betting-options_parent">
          <div className="betting-options_parent__child">Totals</div>
        </div>

        <div className="betting-options_parent">
          <div className="betting-options_parent__child">Corners</div>
        </div>

        <div className="betting-options_parent">
          <div className="betting-options_parent__child">Cards</div>
        </div>
      </div>
    </div>
  );
};

export default BettingOptions;
