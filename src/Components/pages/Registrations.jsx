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
         <Button buttonStyle='btn--r' >
          Individual Registrations
          <i className="fas fa-arrow-right"
          style={{marginLeft:5,
            
          }}></i>
          </Button>

          </div>

          <Button buttonStyle='btn--r'
         >
        Delegation Registrations
          <i className="fas fa-arrow-right"
          style={{marginLeft:5}}></i>
          </Button>

         

      
      </div>
    </div>

    
    <Footer/>
    

 
  
    </>
  );

}


