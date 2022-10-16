import React from 'react';
import './app.css'

const greeting = ( ) => {
    const message = 'Hi. My name is Ramon, and this is my first project using React: A tasklist. I hope you like it :)'
    return <div className="greeting"><center><p>{message}</p></center>
    </div>;
  };
  
  export default greeting;