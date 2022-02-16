import React from 'react';
import TipCardInfo from './TipCardInfo';

function TipTable(props) {
    const { orderTotals } = props;
    const orderTotalsArrayBuilder = {
        "Total Deliveries:": orderTotals.totalDeliveries,
        "Out of Town Deliveries:": orderTotals.outOfTownOrders,
        "In Town Deliveries:": orderTotals.inTownOrders,
        "Cash Tips:": orderTotals.cashTip,
        "Card Tips:": orderTotals.cardTip,
        "Tip Total:": orderTotals.tipTotal
    }
    const ordersArray = Object.entries(orderTotalsArrayBuilder);

    return (
      <div className='tipTable'>
          {
              ordersArray.map((item) => {
                return <TipCardInfo totals={item} key={item[0]}/>
              })
          }
      </div>
    );
  }
  
  export default TipTable;