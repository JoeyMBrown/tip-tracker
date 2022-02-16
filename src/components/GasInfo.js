import React from 'react';
import TipCardInfo from './TipCardInfo';

function GasInfo(props) {
    const { gasTotals } = props;
    const gasArrayBuilder = {
        "Starting Miles:": gasTotals.startingMiles,
        "Ending Miles:": gasTotals.endingMiles,
        "Total Miles Used:": gasTotals.milesUsedDuringShift
    }
    const gasArray = Object.entries(gasArrayBuilder);

    return (
      <div className='gasInfo'>
          {
              gasArray.map((item) => {
                return <TipCardInfo totals={item} key={item[0]}/>
              })
          }
      </div>
    );
  }
  
  export default GasInfo;