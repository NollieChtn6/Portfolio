import { Outlet } from 'react-router';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import ScreenSize from './components/devComponent/ScreenSize';

function App() {
  return (
    <body className="body h-screen w-screen flex flex-col bg-custom-gradient p-3">
      <div className="app-container flex flex-col h-full w-full xl:max-w-[1280px] xl:self-center">
        <Header />
        <Outlet />
        <Footer />
        {/* <ScreenSize /> */}
      </div>
    </body>
  );
}

export default App;
