import React from 'react';

function TipCardInfo(props) {
    const [itemDescription, value] = props.totals;

    return (
      <div className='tipCardInfo'>
          <ul>
              <li>{itemDescription}</li>
              {
                  itemDescription === 'cardTip' || itemDescription === 'cashTip' || itemDescription === 'tipTotal' ? <li>${value}</li> : <li>{value}</li>
              }
          </ul>
          
      </div>
    );
  }
  
  export default TipCardInfo;