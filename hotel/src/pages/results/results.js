import React from 'react';
import './results.css';
import Header from './components/header/Header.js';
import Hotellist from '../../components/hotellist/hotellist';


function Results() {
  return (
    <div>
      <Header />
        <h1>RESULTAT</h1>
        <Hotellist />

      </div>
    );
}



export default Results;