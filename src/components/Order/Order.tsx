import React, { useState, useEffect} from 'react';
import './Order.css';
import { OrderProps } from '../../types/types';

export const Order: React.FC<OrderProps> = ({ orderData }) => {
    const { order_number, type, status_string, destinations } = orderData;
    const pickupAddress = destinations[0].address;
    const dropoffAddress = destinations[1].address;

  return (
    <div className='order-container'>
        <p>Order #{order_number}</p>
        <div className='orders-content'>
            <div className='order-information'>
                <div className='transport-container'>
                    <div className='transport-vehicle'>
                        <img src='/freight.svg' alt='Freight icon' className='freight-icon'/>
                        {type}
                    </div>
                    <div className='status'>{status_string}</div>
                </div>
                <div className='transport-date-information'>
                    <div className='transportation-image'></div>
                    <div className='pickup-dropoff pickup'>PICKUP</div>
                    <div className='pickup-adress adress'>
                        <span className='street'>{pickupAddress}</span>
                    </div>
                    <div className='pickup-time'>
                        <span className='date'>01/04/23</span>
                        <span className='time'>10:45</span>
                    </div>
                    <div className='pickup-dropoff dropoff'>DROPOFF</div>
                    <div className='dropoff-adress adress'>
                        <span className='street'>{dropoffAddress}</span>
                    </div>
                    <div className='dropoff-time'>
                        <span className='date'>01/04/23</span>
                        <span className='time'>17:30</span>
                    </div>
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
