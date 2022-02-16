import React from 'react';

function ShiftTotals(props) {
    const { shiftTotals, updateShiftTotals, endShift, resetShift } = props;

    return (
      <div>
        <div className='shiftBtns'>
            <button id='startShift' className={shiftTotals.startShift ? 'startingMiles' : ''} name='startingMiles' onClick={updateShiftTotals}>Start Shift</button>
            <button id='endShift' className={shiftTotals.endShift ? 'endingMiles' : ''} name='endingMiles' onClick={endShift}>End Shift</button>
        </div>
        <div>
            <button id='resetShift' onClick={resetShift}>Reset Shift Data</button>
        </div>
      </div>
    );
  }
  
  export default ShiftTotals;