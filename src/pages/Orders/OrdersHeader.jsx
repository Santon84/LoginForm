import React from 'react'

function OrdersHeader() {
  return (
    <div className='orders__table-header'>
      <h3>Заказы</h3>
      <select>
        <option value={2}>По дате</option>
        <option value={1}>Сумме</option>
        <option value={1}>Номеру заказа</option>
      </select>
    </div>
  )
}

export default OrdersHeader
