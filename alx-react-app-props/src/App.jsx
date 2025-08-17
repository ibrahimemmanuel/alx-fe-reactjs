import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // 👈 this line MUST exist exactly
// src/App.jsx
// src/App.jsx
import React from "react";
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  const userData = {
    name: "Ibrahim Emmanuel",
    email: "emmanuelibrahim862@gmail.com",
    bio: "I am a software developer passionate about React.",
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
