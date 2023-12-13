import React from 'react';
import './Order.css';

export const Order: React.FC = () => {
  return (
    <div className='order-container'>
        <p>Order #7804GNZ</p>
        <div className='orders-content'>
            <div className='order-information'>
                <div className='transport-container'>
                    <div className='transport-vehicle'>
                        <img src='/freight.svg' alt='Freight icon' className='freight-icon'/>
                        FCL
                    </div>
                    <div className='status'>In transit</div>
                </div>
                <div className='transport-date-information'>
                    <div className='transportation-image'></div>
                    <div className='pickup-dropoff'>PICKUP</div>
                    <div className='pickup-adress'>New York 25 Mortada street, Gainalkes..</div>
                    <div className='pickup-time'>01/04/23 10:45</div>
                    <div className='pickup-dropoff'>DROPOFF</div>
                    <div className='dropoff-adress'>New York 1789 NJ-27, Edison, 08817..</div>
                    <div className='dropoff-time'>01/04/23 17:30</div>
                    <button className='pickup-button'>Start pickup in 1:30:00</button>
                    <button className='resume-button'>
                        Resume
                        <img src='/eye.svg' alt='Eye icon' className='Eye-icon'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
