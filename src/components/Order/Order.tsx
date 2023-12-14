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
                    <div className='pickup-dropoff pickup'>PICKUP</div>
                    <div className='pickup-adress'>Dir</div>
                    <div className='pickup-time'>FyH1</div>
                    <div className='pickup-dropoff dropoff'>DROPOFF</div>
                    <div className='dropoff-adress'>Dir2</div>
                    <div className='dropoff-time'>FyH2</div>
                    <button className='pickup-button'>piBut</button>
                    <button className='resume-button'>
                        <img src='/eye.svg' alt='Eye icon' className='Eye-icon'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
