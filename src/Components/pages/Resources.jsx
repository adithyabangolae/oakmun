import React from 'react';
import './Resources.css';
import Footer from '../Footer';
import { Button } from '../Button';




export default function Resources() {
  return (
    <>

<div className='background_container_r'> </div>

 <div className='resources'>
      <div className='resources_container'>
        <div className="resources_heading">
        <h1>Delegate resources</h1>
        </div>

<div className="button">
<a
      href="https://docs.google.com/spreadsheets/d/1luo-NycRp8VC8AQ88MeSsWTlccCNCstVOSiYJ9A2qsM/edit?usp=sharing"
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
          Matrix 
          <i className="fas fa-arrow-right"
          style={{marginLeft:5,
            
          }}></i>
          </Button>
          </a>

          </div>

          <Button buttonStyle='btn--r'
         >
        Background guides 
          <i className="fas fa-arrow-right"
          style={{marginLeft:5}}></i>
          </Button>

         

      
      </div>
    </div>

    <div className="container_r ">
      <div className="info-section_r ">
        <div className="image-container_r ">
          <img src="/images/tips.png" alt="Tips to Success at YMUN LI" className="info-image" />
        </div>
        <div className="text-container_r ">
          <h2 className="title_r ">TIPS TO SUCCESS AT OakMUN</h2>
          <p className="description_r ">
            Click the button below for a guide to success at OakMUN, including tips on
            researching effectively for your committee, preparing for the conference, and
            making the most of your time in New Haven on Oakkridge's campus!
          </p>
          <a
      href="/assets/tipsAndGuidelines.pdf"
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
          <Button buttonStyle='btn--outline'
         >
      
      LEARN MORE
    
          </Button>
          </a>
        </div>
      </div>
      
      <div className="info-section_r ">
        <div className="image-container_r ">
          <img src="/assets/procedureFlowMap.png" alt="UNA-USA Procedure Flow Map" className="info-image" />
        </div>
        <div className="text-container_r ">
          <h2 className="title_r ">UNA-USA PROCEDURE FLOW MAP</h2>
          <p className="description_r ">
            Click the button below for an expanded version of the UNA-USA procedure map,
            which breaks down the types of motions, order of caucuses, and general committee
            procedure.
          </p>
          <a
      href="/assets/flowOfDebate.png"
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
          <Button buttonStyle='btn--outline'
         >
        LEARN MORE
          </Button>
          </a>
        </div>
      </div>

      <div className="info-section_r ">
        <div className="image-container_r ">
          <img src="/assets/procedureDesc.png" alt="UNA-USA Procedure Description" className="info-image" />
        </div>
        <div className="text-container_r ">
          <h2 className="title_r ">UNA-USA Procedure Description</h2>
          <p className="description_r ">
          Click the button below for a description of committee flow at OakMUN, 
          and the specifics of UNA-USA Procedure. 
          </p>
          <a
      href="/assets/procedure_description.pdf"
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
          <Button buttonStyle='btn--outline'
         >
        LEARN MORE
          </Button>
          </a>
        </div>
      </div>
      <div className="info-section_r ">
        <div className="image-container_r ">
          <img src="/assets/pointsAndMotions.png" alt="Points and Motions Table" className="info-image" />
        </div>
        <div className="text-container_r ">
          <h2 className="title_r ">Points and Motions Table
          </h2>
          <p className="description_r ">
          Delegates, for your convenience, here is OakMUN’s quick and easy-to-reference table of all available points and motions.
          Click the button below to access.
          </p>
          <a
      href="/assets/points_and_motion.pdf"
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
          <Button buttonStyle='btn--outline'
         >
        LEARN MORE
          </Button>
          </a>
        </div>
      </div>
    </div>

   

    <Footer/>
    

 
  
    </>
  );

}


