import React, { useState } from 'react';

function TipCardInfo(props) {
    const [itemDescription, value] = props.totals;

    return (
      <div>
          <ul>
              <li>{itemDescription}</li>
              <li>{value}</li>
          </ul>
          
      </div>
    );
  }
  
  export default TipCardInfo;