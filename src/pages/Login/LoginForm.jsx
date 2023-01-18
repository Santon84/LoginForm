import React, { useEffect, useState } from 'react'
//styles
import './LoginForm.css'
import { setCookie, getCookie } from '../../services/cookies';


function LoginForm({login, setIsLoggedIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  

  const doLogin = (e) => {
    e.preventDefault();
    if (!validateInput()) return;
    
    for (let i=0; i<users.length; i++) {
      alert('email ':users[i].email);
      if (users[i].email === email && users[i].password === password){
        setCookie('email', users[i].email);
        setCookie('user-name', users[i].name);
        setCookie('isLogged', true);
        login();
        
        return;
      }
    }
   
      
    alert('Not valid');
    

    
  }

 
  const validateInput = () => {

    if (email === '' || email === null) {
      
      alert('Заполните email');
      return false;
    }
    if (password === '' || password === null) {
      alert('Введите пароль');
      return false;
    }
    return true;
  }

useEffect(() => {
  const isLogged = getCookie('isLogged');
  
  if (isLogged) {
    setIsLoggedIn(true);
  }else {
    fetch('https://login-form-swart-nu.vercel.app/users.json')
    .then(res => res.json())
    .then(json => setUsers(json.users))
  }
  
  

},[])


  return (
    <div className='loginform'>
    <div className='loginform__wrapper'>
      <form onSubmit={doLogin}>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email'></input>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Пароль'></input>
        <input type='submit' value='Войти'></input>
        <p className='loginform__undertext'>Забыли пароль?</p>
      </form>
    </div>
    </div>
  )
}

export default LoginForm
