import React, { useState } from 'react';

function OrderForm(props) {
    const { updateOrder, order, updateTip, onSubmit } = props;

    return (
      <div>
        <div>
            <button className={order.outOfTown ? 'outOfTown' : ''} name='outOfTown' onClick={updateOrder}>Out of Town</button>
            <button className={order.inTown ? 'inTown' : ''} name='inTown' onClick={updateOrder}>In Town</button>
        </div>
        
        <div>
          <label> Cash Tip:
            <input type='number' name='cashTip' value={order.cashTip} onChange={updateTip} placeholder='Tip amount $'/>
          </label>

          <label> Card Tip:
            <input type='number' name='cardTip' value={order.cardTip} onChange={updateTip} placeholder='Tip amount $'/>
          </label>
          <button className='submit' type='submit' onClick={onSubmit}>Submit</button>
        </div>

      </div>
    );
  }
  
  export default OrderForm;