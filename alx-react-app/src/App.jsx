import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // 👈 this line MUST exist exactly

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </>
  );
}

export default App;
