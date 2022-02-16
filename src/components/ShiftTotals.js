import React, { useState } from 'react';

function ShiftTotals(props) {
    const { shiftTotals, updateShiftTotals, endShift, resetShift } = props;

    return (
      <div>
        <div>
            <button className={shiftTotals.startShift ? 'startingMiles' : ''} name='startingMiles' onClick={updateShiftTotals}>Start Shift</button>
            <button className={shiftTotals.endShift ? 'endingMiles' : ''} name='endingMiles' onClick={endShift}>End Shift</button>
        </div>
        <div>
            <button onClick={resetShift}>Reset Shift Data</button>
        </div>
      </div>
    );
  }
  
  export default ShiftTotals;