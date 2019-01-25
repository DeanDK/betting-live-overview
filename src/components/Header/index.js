import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="header-icons">
      <img src="/icons/star.png" alt="star" height="30px" width="30px" />
      <img src="/icons/football.png" alt="star" height="30px" width="30px" />
      <img src="/icons/basketball.png" alt="star" height="30px" width="30px" />
      <img src="/icons/tennis.png" alt="star" height="30px" width="30px" />
      <img src="/icons/baseball.png" alt="star" height="30px" width="30px" />
      <img src="/icons/waterpolo.png" alt="star" height="30px" width="30px" />
      <img src="/icons/volleyball.png" alt="star" height="30px" width="30px" />
      <img src="/icons/handball.png" alt="star" height="30px" width="30px" />
      <img src="/icons/formule_1.png" alt="star" height="30px" width="30px" />
    </div>

    <div className="header-text">
      <div className="parent_header">
        <div className="child">
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
      <div className="parent_header">
        <div className="child">
          <Link to="/">Football</Link>
        </div>
      </div>
      <div className="parent_header">
        <div className="child">
          <Link to="/basketball">Basketball</Link>
        </div>
      </div>
      <div className="parent_header">
        <div className="child">
          <Link to="/tennis">Tennis</Link>
        </div>
      </div>
      <div className="parent_header">
        <div className="child">
          <Link to="/baseball">Baseball</Link>
        </div>
      </div>
      <div className="parent_header">
        <div className="child">
          <Link to="/waterpolo">Waterpolo</Link>
        </div>
      </div>
      <div className="parent_header">
        <div className="child">
          <Link to="/volleyball">Volleyball</Link>
        </div>
      </div>
      <div className="parent_header">
        <div className="child">
          <Link to="/handball">Handball</Link>
        </div>
      </div>
      <div className="parent_header">
        <div className="child">
          <Link to="/formula">Formula</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
