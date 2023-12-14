import { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { MenuBar } from './components/MenuBar/MenuBar';
import { FilterOrders } from './components/FilterOrders/FilterOrders';
import { Order } from './components/Order/Order';
import { OrderType } from './types/types';

function App() {
  const [orders, setOrders] = useState<OrderType[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming');
          setOrders(response.data.result);
          console.log(orders);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);

  return (
    <>
      <MenuBar />
      <FilterOrders />
      {orders.map((order) => (
        <Order key={order._id} orderData={order} />
      ))}
    </>
  );
}
  
export default App
