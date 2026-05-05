import React from 'react';
import Home from './Home';
import Addhobby from './Addhobby';
import Favourites from './Favourites';

const Body = (props) => {
  const { lnk, hobbies, toggleFavourite, deleteHobby, updateHobby, addHobby } = props;

  const renderComponent = () => {
    switch (lnk) {
      case "Home":
        return (
          <Home
            hobbies={hobbies}
            toggleFavourite={toggleFavourite}
            deleteHobby={deleteHobby}
            updateHobby={updateHobby}
          />
        );

      case "Add":
        return <Addhobby addToHobby={addHobby} />;

      case "Favourites":
        return (
          <Favourites
            hobbies={hobbies}
            deleteHobby={deleteHobby}
          />
        );

      default:
        return <h2 style={{ textAlign: "center" }}>Page not found</h2>;
    }
  };

  return <div className="body-container">{renderComponent()}</div>;
};

export default Body;