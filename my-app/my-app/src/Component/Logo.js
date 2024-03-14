import React from 'react';

const Logo = ({ heading, image }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{heading}</h1>
      <img src={image} alt="Logo" style={{ maxWidth: '100px', maxHeight: '100px' }} />
    </div>
  );
};

export default Logo;
