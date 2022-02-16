import React from 'react';

function OrderForm(props) {
    const { updateOrder, order, updateTip, onSubmit } = props;

    return (
      <div className='orderForm'>
        <div className='locationButtons'>
            <button id='outOfTownBtn' className={order.outOfTown ? 'outOfTown' : ''} name='outOfTown' onClick={updateOrder}>Out of Town</button>
            <button id='inTownBtn' className={order.inTown ? 'inTown' : ''} name='inTown' onClick={updateOrder}>In Town</button>
        </div>
        
        <div className='cashTip'>
          <label id="cashTipLabel">Cash Tip</label>
          <input className='textInput' type='number' name='cashTip' value={order.cashTip} onChange={updateTip} placeholder='Tip amount $'/>
        </div>
        <div className='cardTip'>
            <label id="cardTipLabel">Card Tip</label>
            <input className='textInput' type='number' name='cardTip' value={order.cardTip} onChange={updateTip} placeholder='Tip amount $'/>
        <div>
          <button id="submitBtn" className='submit' type='submit' onClick={onSubmit}>Submit</button>
        </div>
        </div>

      </div>
    );
  }
  
  export default OrderForm;