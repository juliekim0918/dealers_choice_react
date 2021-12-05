import React from "react";

const Navbar = ({ reset }) => {
  return (
    <div id="nav-bar">
      <a href="/">
        <img src="/zoo_logo.png" alt="" />
      </a>
      <div className="nav-menu">
        <a onClick={reset}>See all animals</a>
        {/* <a href="">Trainers</a> */}
      </div>
    </div>
  );
};

export default Navbar;
