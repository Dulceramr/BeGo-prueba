//import React from 'react';
import './App.css';
import { MenuBar } from './components/MenuBar/MenuBar';
import { FilterOrders } from './components/FilterOrders/FilterOrders';
import { Order } from './components/Order/Order';

function App() {
  return (
    <>
      <MenuBar />
      <FilterOrders />
      <Order />
    </>
  );
}
  
export default App
