import React from 'react';
import './App.css';
import Logo from './Logo'; // Assuming 'Logo.js' is in the 'src' directory

function App() {
  let images = [
    "https://cdn.siasat.com/wp-content/uploads/2020/02/Royal-Challengers-Bangalore.jpg",
    "https://wallpapercave.com/wp/wp4639188.jpg"
  ];

  return (
    <div className="App">
      <Logo heading="Super League" images={images} />
    </div>
  );
}

export default App;
