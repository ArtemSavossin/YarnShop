import React from 'react';

const FaIcon = ({ icon }) => {
  if (window.innerWidth <= 769) {
    return (
      <i className={`fas ${icon} fa-lg`} style={{ paddingRight: '3px' }}></i>
    );
  }
  return (
    <i className={`fas ${icon} fa-2x`} style={{ paddingRight: '3px' }}></i>
  );
};

export default FaIcon;
