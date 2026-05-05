import { useState } from 'react';

const Addhobby = ({ addToHobby }) => {
  const [hobbytext, updateText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addHobbyHandler = () => {
    if (hobbytext.trim() === "" || imageUrl.trim() === "") return;

    addToHobby({
      name: hobbytext,
      image: imageUrl
    });

    updateText("");
    setImageUrl("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addHobbyHandler();
    }
  };

  return (
    <div className="add-container">
      <input
        type="text"
        value={hobbytext}
        onChange={(e) => updateText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter hobby"
      />

      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter image URL"
      />

      <button onClick={addHobbyHandler}>
        Add Hobby
      </button>
    </div>
  );
};

export default Addhobby;