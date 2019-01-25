import React from "react";
import Header from "./../components/Header";
import BettingOptions from "./../components/BettingOptions";

const Layout = props => {
  return (
    <div>
      <Header />
      <BettingOptions />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
