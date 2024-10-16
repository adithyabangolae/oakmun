import React from 'react';
import './DatesAndDeadLines.css';
import Footer from '../Footer';




export default function DatesAndDeadLines() {
  return (
    <>
 <div className='dand'>
      <div className='dand__container'>
        <div className="dand_heading">
        <h1>Dates and Deadlines</h1>
        </div>

        <hr style={{
            width:800,
            alignItems:'center',
            margin: '0 auto', 
            marginTop:20,
            marginBottom:40      
          }}/>

<div className="dand-item">
        <h3>Official Registration Timeline</h3>
        </div>

        <div className="dand-column">
        <p><strong>24th October:</strong> Early Bird [Individual and Delegation] Registrations Close (Fee: Rs. 1500)</p>
<p><strong>25th October:</strong> Regular [Individual and Delegation] Registrations Open (Fee: Rs. 1500 per delegate)</p>
<p><strong>28th October:</strong> Regular [Individual and Delegation] Registrations Close (Fee: Rs. 1800 per delegate)</p>
<p><strong>November 8th:</strong> Conference Begins</p>
<p><strong>November 9th:</strong> Socials</p>
    </div>

  
      
      

      </div>
    </div>


    

    <Footer/>
    

 
  
    </>
  );

}