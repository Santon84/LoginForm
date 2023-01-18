import React from 'react'

function Table({children}) {
  return (
    <>
      <ul key='table' className='orders__table'>
      {children}
      </ul>
    </>
  )
}

export default Table
