import React from 'react';
import logo from '../assets/Logo.png'; // Make sure this path is correct

export const Appbar = () => {
  return (
    <div className='flex justify-center '>
      <img className='h-20 mt-16 border rounded-full border-black' src={logo} alt="logo" />
    </div>
  );
};
