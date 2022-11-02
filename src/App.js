import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main id="main-section">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
