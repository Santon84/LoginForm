import React from 'react'

function OrdersHeader({sortingValues, selectedSort, handleSelectedSort}) {



  return (
    <div className='orders__table-header'>
      <h3>Заказы</h3>
      <select key='sorter'  onChange={(e) => handleSelectedSort(e.target.value)}>
                        
                          {
                            
                            sortingValues.map((elem) => {
                              return <option key={'select-'+Object.keys(elem)[0]} value={Object.keys(elem)[0]}>{Object.values(elem)[0]}</option>
                            })
                          }
    </select>
    </div>
  )
}

export default OrdersHeader
