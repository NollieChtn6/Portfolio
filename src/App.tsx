import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ScreenSize from './components/devComponent/ScreenSize';

function App() {
  return (
    <div className="app-container h-screen w-screen flex flex-col bg-custom-gradient">
      <Header />
      <p>My Body</p>
      <Footer />
      <ScreenSize />
    </div>
  );
}

export default App;
