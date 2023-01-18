import React, { useEffect, useRef, useState } from 'react'
import OrdersHeader from './OrdersHeader'
import Table from './Table';
import TableRow from './TableRow';
import PulseLoader from "react-spinners/PulseLoader";

function OrdersData() {
const [orders, setOrders] = useState(null);
const [visibleItems, setVisibleItems] = useState(5);
const [isLoading, setIsLoading] = useState(true);
const buttonMore = useRef();
const tableColumnsNames = {id: 'Номер заказа', email: 'Email', amount: 'Сумма', date: 'Дата'}
const color = '#F7F5F5';

useEffect(() => {
  fetch('http://localhost:5000/orders.json')
  .then(res => res.json())
  .then(json => {
    setOrders(json.orders);
    setIsLoading(false);
    })

},[])

const showMoreClick = () => {
  setIsLoading(true);
  setTimeout(() => {
    setIsLoading(false);
    if (visibleItems <= orders.length) {
      setVisibleItems(prev => {
        if(prev+5 >= orders.length) {
          //hide button
          buttonMore.current.style.display = 'none';
        }
        return prev + 5});
    }
    if (visibleItems > orders.length)
    {
      console.log('HIDE BUTTON');
      
    } 
    

  },1000);
  

}
  
  return (
    <>
      <section key='body' className='orders__body'>
            <OrdersHeader />
            <Table>
              <TableRow orderData={tableColumnsNames} />
              {orders ? 
              orders.slice(0,visibleItems).map(order => {
                return <TableRow orderData={order}/>
              }) : ''}
            </Table>
            
            {isLoading && <PulseLoader 
            color={color}
            size={20}
            />  
            }
            <button ref={buttonMore} className='btn-show-more' onClick={showMoreClick}>Показать еще</button>
              
        </section>
    </>
  )
}

export default OrdersData
