import './App.css';
import Navbar from './pages/Navbar';
import Body from './pages/Body';
import { useState } from 'react';

function App() {
  const [activeLink, setLink] = useState("Home");
  const [myHobbies, updateHobbies] = useState([]);
  const [counter, setCounter] = useState(1);

  const updateLink = (data) => {
    setLink(data);
  };

  // ✅ FIXED: now accepts object {name, image}
  const addHobby = (data) => {
    updateHobbies(prev => [
      ...prev,
      {
        id: counter,
        name: data.name,
        image: data.image,
        favourite: false
      }
    ]);
    setCounter(prev => prev + 1);
  };

  // ⭐ Toggle favourite
  const toggleFavourite = (id) => {
    updateHobbies(prev =>
      prev.map(hobby =>
        hobby.id === id
          ? { ...hobby, favourite: !hobby.favourite }
          : hobby
      )
    );
  };

  // 🗑 Delete
  const deleteHobby = (id) => {
    updateHobbies(prev =>
      prev.filter(hobby => hobby.id !== id)
    );
  };

  // ✏️ Update name only (image stays same)
  const updateHobby = (id, newName) => {
    updateHobbies(prev =>
      prev.map(hobby =>
        hobby.id === id
          ? { ...hobby, name: newName }
          : hobby
      )
    );
  };

  return (
    <div className="App">
      <Navbar uLink={updateLink} />
      <Body
        lnk={activeLink}
        addHobby={addHobby}
        hobbies={myHobbies}
        toggleFavourite={toggleFavourite}
        deleteHobby={deleteHobby}
        updateHobby={updateHobby}
      />
    </div>
  );
}

export default App;