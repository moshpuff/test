import React from 'react';
import '../header/Header.css'
export default function Header() {


  return (
    <div className="header">
      <div class="row">
        <div class="column-left">
          <h1 className="logo">Find.Hotel</h1>
        </div>
        <div class="column column-middle">
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div class="column column-right">
            <ul><li>
            <p>Log in</p>
            </li>
            <li>
          <button>Sign in</button>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
