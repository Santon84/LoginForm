//styles
import './App.css';
//components
import LoginForm from './pages/Login/LoginForm';
//router
import {Routes, Route, Navigate } from 'react-router-dom'
import Orders from './pages/Orders/Orders';
import { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    setIsLoggedIn(false);
  }
  const login = () => {
    setIsLoggedIn(true);
  }
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path='/' element={ !isLoggedIn ? <LoginForm setIsLoggedIn={setIsLoggedIn} login={login}/> : <Navigate to="/orders" />}/>
        <Route path='/orders' element={ isLoggedIn ? <Orders setIsLoggedIn={setIsLoggedIn}/> : <Navigate to="/" />}/>
      
      </Routes>
    </div>
  );
}

export default App;
