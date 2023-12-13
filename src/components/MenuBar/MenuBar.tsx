import React from 'react';
import './MenuBar.css';


export const MenuBar: React.FC= () => {
  return (
    <div className='menu-bar'>
      <img src='/arrow.svg' alt='Return' className='arrow' />
      <h2 className='title'>Cargo Orders</h2>
      <img src='/bell.svg' alt='Notifications' className='notifications' />
    </div>
  )
}
