import React from 'react';

const Navbar = ({ uLink, active }) => {
  return (
    <div className="navbar">
      <button
        className={active === "Home" ? "nav-btn active" : "nav-btn"}
        onClick={() => uLink("Home")}
      >
        Home
      </button>

      <button
        className={active === "Add" ? "nav-btn active" : "nav-btn"}
        onClick={() => uLink("Add")}
      >
        Add
      </button>

      <button
        className={active === "Favourites" ? "nav-btn active" : "nav-btn"}
        onClick={() => uLink("Favourites")}
      >
        Favourite
      </button>
    </div>
  );
};

export default Navbar;