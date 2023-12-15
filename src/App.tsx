import { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { MenuBar } from './components/MenuBar/MenuBar';
import { FilterOrders } from './components/FilterOrders/FilterOrders';
import { Order } from './components/Order/Order';
import { OrderType } from './types/types';

function App() {
  //const [orders, setOrders] = useState<OrderType[]>([]);
  const [allOrders, setAllOrders] = useState<OrderType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming');
          setAllOrders(response.data.result);
          console.log(allOrders);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value.toUpperCase());
    };

    const filteredOrders = allOrders.filter(order => order.order_number.includes(searchTerm));

  return (
    <>
      <MenuBar />
      <FilterOrders handleSearchChange={handleSearchChange}/>
      {filteredOrders.map((order) => (
        <Order key={order._id} orderData={order} />
      ))}
    </>
  );
}
  
export default App
