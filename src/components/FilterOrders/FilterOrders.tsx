import React from 'react';
import './FilterOrders.css';

export const FilterOrders: React.FC = () => {
  return (
    <div className='filter-container'>
        <div className='state-order'>
            <p className='upcoming'>Upcoming</p>
            <p className='completed-past'>Completed</p>
            <p className='completed-past'>Past</p>
        </div>
        <div className='search'>
            <img src='/search.svg' alt='Search' className='search-image' />
            <input className='search-input' placeholder='Search..'></input>
        </div>
    </div>
  )
}
