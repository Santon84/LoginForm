import React, { useEffect, memo } from 'react'

function TableRow({orderData}) {
const {id, email, amount, date} = orderData;



  return (
    <>
        <li key={id} className='row-wrapper'>
            <div key='id' className='cell cell-id'>{id}</div>
            <div key='email' className='cell cell-email'>{email}</div>
            <div key='amount' className='cell'>{amount}</div>
            <div key='date' className='cell'>{date}</div>
        </li>
    </>
  )
}

export default memo(TableRow)
