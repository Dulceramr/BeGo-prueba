import React, { useState, useEffect} from 'react';
import './Order.css';
import { OrderProps } from '../../types/types';

export const Order: React.FC<OrderProps> = ({ orderData }) => {
    const { order_number, type, status_string, destinations, status_class } = orderData;
    const pickupAddress = destinations[0].address;
    const dropoffAddress = destinations[1].address;

    const [timeRemaining, setTimeRemaining] = useState<number>(0);
    const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);

    useEffect(() => {
        const currentDate = new Date().getTime();
        const orderStartDate = destinations[0].start_date;
        const timeDifference = orderStartDate - currentDate;

        const minutesRemaining = Math.ceil(timeDifference / (1000 * 60));

        setButtonEnabled(minutesRemaining > 0);

        setTimeRemaining(minutesRemaining);
    }, [destinations]);

    const handleButtonClick = () => {
        console.log("Navegar")
    };

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp);
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
        } as const;
        return date.toLocaleString('en-US', options);
    };

  return (
    <div className='order-container'>
        <p>
            <span className='order-text'>Order # </span>
            <span className='order-number'>{order_number}</span>
        </p>
        <div className='orders-content'>
            <div className='order-information'>
                <div className='transport-container'>
                    <div className='transport-vehicle'>
                        <img src='/freight.svg' alt='Freight icon' className='freight-icon'/>
                        {type}
                    </div>
                    <div className='status-container'>
                        <div className={`status-dot ${status_class}`}></div>
                        <div className='status'>{status_string}</div>
                    </div>
                </div>
                <div className='transport-date-information'>
                    <div className='transportation-image'></div>
                    <div className='pickup-dropoff pickup'>PICKUP</div>
                    <div className='pickup-adress adress'>
                        <span className='street'>{pickupAddress}</span>
                    </div>
                    <div className='pickup-time'>
                        <span className='date'>{formatDate(destinations[0].start_date)}</span>
                    </div>
                    <div className='pickup-dropoff dropoff'>DROPOFF</div>
                    <div className='dropoff-adress adress'>
                        <span className='street'>{dropoffAddress}</span>
                    </div>
                    <div className='dropoff-time'>
                         <span className='date'>{formatDate(destinations[1].end_date)}</span>
                     </div>
                    {buttonEnabled && (
                        <button 
                        className='pickup-button'
                        onClick={handleButtonClick}
                        disabled={!buttonEnabled}
                        >
                            {`Start pickup in ${timeRemaining}`}  
                        </button>
                    )}
                    <button className='resume-button'>
                        Resume
                        <img src='/eye.svg' alt='Eye icon' className='Eye-icon'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};
