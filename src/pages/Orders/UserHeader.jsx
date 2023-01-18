import React from 'react'

function UserHeader({handleClick, email, user}) {
  
  return (
    <>
      <section  key='header' className='orders__header '>
        <div className='user-info'>

            <div className='user-image'></div>
            <div className='user-wrapper'>
                <p className='user-name'>{user}</p>
                <p className='user-email'>{email}</p>
            </div>
        </div>
        <div className='orders__button-wrapper'>
            <button className='orders__btn-logout'onClick={handleClick}>Выход</button>
        </div>
        </section>
    </>
  )
}

export default UserHeader
