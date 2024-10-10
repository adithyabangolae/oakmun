import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 13.0827,
  lng: 77.6376
}

function Footer() {
 
  return (
    <div className='footer-container'>
      <div className="quote_footer">
          <p>Show them who you are.</p>
         </div>
      <section className='footer-contact'>
        <p className='footer-heading'>
          Contact Details
        </p>
        <p className='footer-contact-text'>
        
          Send any queries over to <a href="mailto:events.blr@oakridge.in"
          style={{color:'#039BE5'}}
          >events.blr@oakridge.in</a>
        </p>
      </section>

    
        <div className="icon-container">
        <a
      href="https://www.oakridge.in/bengaluru/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ 
        

      }}
    >
      <div className="icon">

        <img src="/images/icon_oakridge.png" alt="Oakridge Icon" />
     
      </div>
      </a>

      <a
      href="https://www.instagram.com/oak.mun/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ 
        
      }}
    >
      <div className="icon">
        <img src="/images/icon_instagram.png" alt="Instagram Icon" />
      </div>
      </a>
      <div className="icon">
        <img src="/images/icon_github.png" alt="GitHub Icon" />
      </div>
    </div>
        
      
      <div className="website-rights">
         <p> © 2024 Oakridge Model United Nations </p>
         </div>


         <section className='footer-venue'>
        <p className='heading-venue'>
          Conference information
        </p>

        <p className='footer-venue-text'>
        
        November 8-10, 2024
        </p>

        <p className='footer-location-text'>
        
        Venue: <a href="https://www.google.com/maps/place/Oakridge+International+School+Bangalore/@12.8875457,77.7492487,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae0d539b9bf9ef:0x8173c2437f9bc14d!8m2!3d12.8875405!4d77.7518236!16s%2Fg%2F11csp71rdx?entry=ttu&g_ep=EgoyMDI0MTAwNy4xIKXMDSoASAFQAw%3D%3D"
          style={{color:'#039BE5'}}
          >Oakridge International School Bangalore</a>
        </p>

       
        
      </section>

    </div>

    


  );
}

export default Footer;