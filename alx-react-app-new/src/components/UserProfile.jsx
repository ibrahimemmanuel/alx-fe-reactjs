import React from 'react';

function UserProfile() {
  const profileStyle = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '300px',
    margin: '20px auto',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100px',
    borderRadius: '50%',
  };

  return (
    <div style={profileStyle}>
      <img
        src="https://via.placeholder.com/100"
        alt="User Avatar"
        style={imageStyle}
      />
      <h2>Jane Doe</h2>
      <p>Frontend Developer</p>
    </div>
  );
}

export default UserProfile;
