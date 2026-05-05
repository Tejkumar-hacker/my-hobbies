import React from 'react';

const Favourites = ({ hobbies, deleteHobby }) => {
  const favouriteHobbies = hobbies.filter(h => h.favourite);

  return (
    <div>
      <h1>Favourite Hobbies ⭐</h1>

      {favouriteHobbies.length === 0 ? (
        <p>No favourite hobbies.</p>
      ) : (
        <div className="grid">
          {favouriteHobbies.map(hobby => (
            <div key={hobby.id} className="card">

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
                <span className="star">⭐</span>

                <button onClick={() => deleteHobby(hobby.id)}>
                  🗑
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;