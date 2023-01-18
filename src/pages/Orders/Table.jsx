import React from 'react'

function Table({children}) {
  return (
    <>
      <ul key='table-data' className='orders__table'>
      {children}
      </ul>
    </>
  )
}

export default Table
