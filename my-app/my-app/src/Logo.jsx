import React from 'react';
import Typography from '@mui/material/Typography';

function Logo(props) {
  return (
    <div>
      {props.heading && (
        <Typography gutterBottom variant="h3" component="div" sx={{ textAlign: 'center', color: 'white', fontWeight: 'bold',marginTop:'30px',paddingTop:'10px' }}>
          {props.heading}
        </Typography>
      )}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {props.images.map((image, index) => (
          <div key={index} style={{ margin: '0px', height: '440px', width: '440px',marginLeft:'20px' ,paddingLeft:'110px',paddingTop:'50px',}}>
            <img src={image} alt="Logo" style={{ height: '100%', width: 'auto' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logo;
