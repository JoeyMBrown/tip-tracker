import React, { useState } from 'react';
import TipCardInfo from './TipCardInfo';

function TipTable(props) {
    const { orderTotals } = props;
    const ordersArray = Object.entries(orderTotals);
    console.log(ordersArray);
    return (
      <div>
          {
              ordersArray.map((item) => {
                return <TipCardInfo totals={item} key={item[0]}/>
              })
          }
      </div>
    );
  }
  
  export default TipTable;