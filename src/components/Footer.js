import React from 'react';

function Footer() {

    return (
      <div className='footer'>
          <div className='thanks'>
            <p>Thanks for checking out this project!  It's written with react and uses localstorage to save entries on page refresh.</p>
          </div>
          <div className='links'>
            <ul className='linksList'>
                <li><a href="https://github.com/JoeyMBrown">Github</a></li>
                <li><a href="https://www.linkedin.com/in/joseph-m-brown/">LinkedIn</a></li>
            </ul>
          </div>
      </div>
    );
  }
  
  export default Footer;