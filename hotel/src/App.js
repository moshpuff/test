import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Searchbar from './components/searchbar/searchbar.js';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className='banner-container'>
        <Searchbar />
        <Footer />
        </div>
      </div>
    );
}

export default App;