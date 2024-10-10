import React from 'react';
import './Registrations.css';
import Footer from '../Footer';
import { Button } from '../Button';




export default function Registrations() {
  return (
    <>

<div className='background_container_reg'> </div>

 <div className='registrations'>
      <div className='registrations_container'>
        <div className="registrations_heading">
        <h1>Registrations</h1>
        </div>

<div className="button_reg">
<a
      href="https://docs.google.com/forms/d/e/1FAIpQLSfXDcvAFUlDG9U_HCTOQzzhu132pS16CiG2Q2O4xYhRmoW6cw/viewform"
      target="_blank"
      rel="noopener noreferrer"
      style={{ 
        textDecoration: 'none', 
        color: 'inherit', 
        display: 'block', 
        width: '100%', 
        height: '100%' 
      }}
    >
         <Button buttonStyle='btn--r' >
          Individual Registrations
          <i className="fas fa-arrow-right"
          style={{marginLeft:5,
            
          }}></i>
          </Button>
</a>
          </div>
          <div className="button_reg">
          <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSd5f_5MTo-ahFOokglaqguBXb6mTll-pIXMDOL_xTUGIwrbQg/viewform"
      target="_blank"
      rel="noopener noreferrer"
      style={{ 
        textDecoration: 'none', 
        color: 'inherit', 
        display: 'block', 
        width: '100%', 
        height: '100%' 
      }}
    >
          <Button buttonStyle='btn--r'
         >
        Delegation Registrations
          <i className="fas fa-arrow-right"
          style={{marginLeft:5}}></i>
          </Button>
</a>
</div>
         

      
      </div>
    </div>

    
    <Footer/>
    

 
  
    </>
  );

}


