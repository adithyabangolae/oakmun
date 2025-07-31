import React from 'react';
import './Faqs.css';
import Footer from '../Footer';




export default function Faqs() {
  return (
    <>
 <div className='faqs'>
      <div className='faqs__container'>
        <div className="faqs_heading">
        <h1>OakMUN FAQs</h1>
        </div>

        <hr style={{
            width:800,
            alignItems:'center',
            margin: '0 auto', 
            marginTop:20,
            marginBottom:40      
          }}/>

<div className="mun-faq">
      <h3>What is the dress code?</h3>
      
      <p>
      The dress code is Western formal business attire. For males, we recommend a button down, a pair of trousers and a nice tie. Blazers or jackets are suggested, but not required. For females, we recommend appropriate blouses or button-downs. Trousers and skirts are both acceptable. Formal dresses are also accepted. Delegates of the Bharatiya Yudh Kaksh are allowed and encouraged to wear Indian formal attire. 
      </p>
      
     
      
      <h3>What is the technology policy?</h3>
      
      <p>
      Delegates are allowed to bring their phones and laptops, internet will be provided at the discretion of the Executive Board. Under no circumstances can a delegate access the internet in committee without having been permitted by the committee’s EB. 
      </p>
      
      <h3>How do I register for OakMUN?</h3>
      
      <p>
      Registration for OakMUN happens on our registration platform on the website. To begin the registration process, click on “Registration” and fill out the Google Form presented for either individual or delegation registrations depending on how you will be attending the conference. 
      </p>
      
      <h3>How do I know that my registration has been successful?</h3>
      
      <p>
      You will receive an email confirmation of your registration within 5 days of doing so, 
      if not please email us at <a href="mailto:events.blr@oakridge.in"
          style={{color:'#039BE5'}}
          >events.blr@oakridge.in</a>
        
      </p>
    </div>

  
      
      

      </div>
    </div>


    

    <Footer/>
    

 
  
    </>
  );

}