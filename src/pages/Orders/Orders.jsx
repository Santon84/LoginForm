import React, { useEffect, useState } from 'react'
//styles
import './Orders.css'
import UserHeader from './UserHeader'
import OrdersData from './OrdersData'
import { deleteCookie, getCookie } from '../../services/cookies'

function Orders({setIsLoggedIn}) {

    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    

    function logout() {
        deleteCookie('isLogged');
        deleteCookie('email');
        deleteCookie('user-name');
        setIsLoggedIn(false);
    }
    useEffect(() => {
        setUserEmail(getCookie('email'));
        setUserName(getCookie('user-name'));
    },[])

  return (
    <div className='orders__wrapper'>
        <UserHeader email={userEmail} user={userName} handleClick={logout}/>
        <OrdersData />
    </div>
  )
}

export default Orders
