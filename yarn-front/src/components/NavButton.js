import React from 'react';

const NavButton = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingRight: '10px',
        paddingLeft: '10px',
        color: 'black',
      }}
    >
      <div
        style={
          typeof props.name == 'string'
            ? { textAlign: 'center' }
            : { textAlign: 'center', marginBottom: '-8px', marginTop: '8px' }
        }
      >
        {props.icon}
      </div>
      <div style={{ fontSize: '15px' }}>{props.name}</div>
    </div>
  );
};

export default NavButton;
