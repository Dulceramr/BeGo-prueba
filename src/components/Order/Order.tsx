import React, { useState, useEffect} from 'react';
import './Order.css';
import { OrderProps } from '../../types/types';

export const Order: React.FC<OrderProps> = ({ orderData }) => {
    const { order_number, type, status_string, destinations, status_class } = orderData;
    const pickupAddress = destinations[0].address;
    const dropoffAddress = destinations[1].address;

    const pickupAddressShort = pickupAddress.slice(0, 35) + ' ...';
    const dropoffAddressShort = dropoffAddress.slice(0, 35) + ' ...';

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
        
        const dayOptions = {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
        } as const;
        const dayString = date.toLocaleString('en-US', dayOptions);
    
        const timeOptions = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
        } as const;
        const timeString = date.toLocaleString('en-US', timeOptions);
    
        return (
            <>
                <span className='date'>{dayString}</span>
                <br />
                <span className='time'>{timeString}</span>
            </>
        );
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
                    <img src= '/transport.png' alt='Imagen de medio de transporte' className='transportation-image' />
                    <div className='pickup-dropoff pickup'>PICKUP</div>
                    <div className='pickup-adress adress'>
                        <span className='street'>{pickupAddressShort}</span>
                    </div>
                    <div className='pickup-time'>
                        {formatDate(destinations[0].start_date)}
                    </div>                  
                    <div className='pickup-dropoff dropoff'>DROPOFF</div>
                    <div className='dropoff-adress adress'>
                        <span className='street'>{dropoffAddressShort}</span>
                    </div>
                    <div className='dropoff-time'>
                        {formatDate(destinations[1].end_date)}
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
