import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; // make sure this import is here

function App() {
  return (
    <div>
      <Header />
      <UserProfile />
      <Counter /> {/* Add the counter here */}
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
