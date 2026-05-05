import React, { useState } from 'react';

const Home = ({ hobbies, toggleFavourite, deleteHobby, updateHobby }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEdit = (hobby) => {
    setEditId(hobby.id);
    setEditText(hobby.name);
  };

  const saveEdit = () => {
    if (editText.trim() === "") return;
    updateHobby(editId, editText);
    setEditId(null);
    setEditText("");
  };

  return (
    <div>
      <h1>My Hobbies</h1>

      {hobbies.length === 0 ? (
        <p>No hobbies added yet.</p>
      ) : (
        <div className="grid">
          {hobbies.map((hobby) => (
            <div key={hobby.id} className="card">

              {editId === hobby.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={saveEdit}>Save</button>
                  <button onClick={() => setEditId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  {/* ✅ Image */}
                  <img
                    src={hobby.image}
                    alt={hobby.name}
                    className="hobby-img"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/150")
                    }
                  />

                  {/* ✅ Name */}
                  <strong>{hobby.name}</strong>

                  {/* ✅ Actions */}
                  <div className="actions">
                    <span
                      className="star"
                      onClick={() => toggleFavourite(hobby.id)}
                    >
                      {hobby.favourite ? "⭐" : "☆"}
                    </span>

                    <button onClick={() => startEdit(hobby)}>✏️</button>

                    <button onClick={() => deleteHobby(hobby.id)}>🗑</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;