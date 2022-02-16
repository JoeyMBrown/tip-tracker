import './App.css';
import React, { useState, useEffect } from 'react';
import OrderForm from './components/OrderForm.js';
import ShiftTotals from './components/ShiftTotals';
import TipTable from './components/TipTable';

function App() {

  const orderInitialValues = {
    outOfTown: false,
    inTown: false,
    cashTip: 0,
    cardTip: 0
  };

  const shiftTotalsInitialValues = {
    startingMiles: '',
    endingMiles: '',
    milesUsedDuringShift: 0,
    shiftStarted: false,
    shiftEnded: false
  };

  const [order, setOrder] = useState(orderInitialValues)

  const [shiftTotals, setShiftTotals] = useState(shiftTotalsInitialValues)

  const [orderTotals, setOrderTotals] = useState({
    totalDeliveries: 0,
    outOfTownOrders: 0,
    inTownOrders: 0,
    cashTip: 0,
    cardTip: 0,
    tipTotal: 0
  })

  useEffect(() => {
    //localStorage.clear();
    const orderTotals = localStorage.getItem('orderTotals');
    if(orderTotals) {
      setOrderTotals(JSON.parse(orderTotals));
    }
  },[])

  useEffect(() => {
    localStorage.setItem('orderTotals', JSON.stringify(orderTotals));
  },[orderTotals])

  function updateOrder(e) {
    const { name } = e.target;

    if(name === 'outOfTown' && order.inTown) {
      setOrder({...order, 'inTown': false, [name]: true });
    } else if(name === 'inTown' && order.outOfTown) {
      setOrder({...order, 'outOfTown': false, [name]: true});
    } else {
      setOrder({...order, [name]: !order.name})
    }

  }

  function updateTip(e) {
    const {name, value} = e.target;

    if(name === 'cashTip') {
      setOrder({...order, [name]: value, cardTip: ''});
    } else {
      setOrder({...order, [name]: value, cashTip: ''})
    }
  }

  function onSubmit(e) {
    e.preventDefault();

    if(!order.inTown && !order.outOfTown) {
       return window.alert('please select in town or out of town');
    }

    if(Number(order.cardTip) <= 0 && Number(order.cashTip <= 0)) {
      return window.alert('please enter a tip amount');
    }

    const cashTip = Number(order.cashTip);
    const cardTip = Number(order.cardTip);

    if(order.inTown) {
      setOrderTotals({
        totalDeliveries: orderTotals.totalDeliveries+= 1,
        outOfTownOrders: orderTotals.outOfTownOrders,
        inTownOrders: orderTotals.inTownOrders+= 1,
        cashTip: orderTotals.cashTip += cashTip,
        cardTip: orderTotals.cardTip += cardTip,
        tipTotal: orderTotals.tipTotal += cardTip + cashTip
      })
    } else {
      setOrderTotals({
        totalDeliveries: orderTotals.totalDeliveries+= 1,
        outOfTownOrders: orderTotals.outOfTownOrders+= 1,
        inTownOrders: orderTotals.inTownOrders,
        cashTip: orderTotals.cashTip += cashTip,
        cardTip: orderTotals.cardTip += cardTip,
        tipTotal: orderTotals.tipTotal += cardTip + cashTip
      })
    }

    setOrder(orderInitialValues);
    //console.log(orderTotals)
  }

  function updateShiftTotals(e) {
    const { name } = e.target;
    let mileRange = window.prompt('Enter the mile range of you car at the beginning of your shift.');

    return setShiftTotals({...shiftTotals, [name]: mileRange, shiftStarted: true});
  }

  function endShift() {
      let mileRange = window.prompt('Enter the mile range left at the end of your shift.')

      const totalMiles = Number(shiftTotals.startingMiles) - Number(mileRange);
      return setShiftTotals({ ...shiftTotals, milesUsedDuringShift: totalMiles, shiftEnded: true, 'endingMiles': mileRange });
  }

  function resetShift() {
    let reset = window.confirm('This will reset all shift information.  Are you sure?')
    if(reset) {
      localStorage.clear();
      window.location.reload();
    }
  }

  return (
    <div>
      <OrderForm updateOrder={updateOrder} updateTip={updateTip} onSubmit={onSubmit} order={order} />
      <TipTable orderTotals={orderTotals} />  
      <ShiftTotals shiftTotals={shiftTotals} updateShiftTotals={updateShiftTotals} endShift={endShift} resetShift={resetShift} />
    </div>
  );
}

export default App;
