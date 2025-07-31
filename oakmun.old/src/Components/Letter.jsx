import React from 'react';
import './Letter.css';


/* fix wording in letters to make it look uniform*/

function Letter() {
  return (
    <div className='letter'>
      <div className='letter__container'>
        <div className='letter_heading'>
      <h1>Letter from the Secretary General</h1>
      </div>

      <div className="img-d">
      <img src="images/arryaa.jpg" alt="picture"
      style={{
        width:270,
        marginTop:20
      }}
           />
      
      </div>
      <div className="sg-name">
       <p> Arryaa Oduru </p>
      </div>
      <div className="sgr-name">
      <p> Secretary General </p>
      </div>
      <hr style={{
        width:270,
        position:'absolute',
        marginTop:430,
        marginLeft:625,
        
      }}/>
      <div className="quote_s">
          <p>"The beauty of OakMUN this year is the power placed in the palm of a delegate to change the course of history. The philosophy supports OakMUN’s fundamental mission as a conference: education.”
<br/><br/>
— OakMUN Team</p>
        </div>
      <div className="letter_s">
        
    <p>
      Dear delegates, diplomats, and changemakers, <br/> <br/>

      The spotlight of anticipation has been cast, and the curtains are closer to being drawn to reveal the main event, Oakridge Model United Nations 2024. 
      It’s a distinct honor to serve as your secretary general for the conference this year.
       As the 21st century marches on, the world plunges further into darkness. 
       It’s your duty as delegates involved in what was once established as a bastion of global peace to engage in debate of the highest quality.
<br/> <br/>
Extremism keeps us on the precipice of monumental conflict, clashes of ideology threaten to drown the world in war, and countries that wield power on the global stage are left unmoderated. 
This year, you as delegates can change the world, or the course of history itself, in our 8 diverse committees. 
As leaders on the international stage, it’s your job to ensure the prevention of catastrophe.
<br/> <br/>
A puppet master’s only concern is how well he can manipulate his marionettes, and as delegates in both historical and contemporary committees, you must work to change the world as we know it. 
Whether this change is according to your liking or not, is up to your performance.
 Remember to research well, but know that your preparation period will simply be the calm before the storm.
<br/> <br/>
Thus let us commence with the proceedings of Oakridge Model United Nations 2024. Bang your tables until your palms redden, laugh until your stomachs ache, defend your stance to your last breath, and make sure your voice is heard across the room. 
As global powers and portfolios in the United Nations, you are the directors of the planet’s greatest theatrical spectacle. 
The world is in the palm of your hands, let’s see what you make of it.
<br/> <br/>
I’ll see you in November,
<br/> <br/>
Arryaa Oduru, Secretary General
      </p>
      <hr style={{
        width:800,
        alignItems:'center',
        margin: '0 auto',         

        
      }}
      
      />
      </div>

      <div className="letter_heading">
      <h1>Letter from the Director General</h1>
      </div>

      <div className="img-s">
      <img src="images/riya.jpg" alt="picture"
      style={{
        width:270,
       marginBottom:100,
        marginTop:20
      }}
           />
      
      </div>

      <div className="dg-name">
       <p> Riya Iyengar </p>
      </div>
      <div className="dgr-name">
      <p> Director General </p>
      </div>
      <hr style={{
        width:270,
        position:'absolute',
        marginTop:1660,
        marginLeft:625,
        
      }}/>
      <div className="quote_d">
          <p>“This is truly your chance to show the circuit what you are as a delegate, your shot at greatness”
<br/><br/>
— OakMUN Team</p>
        </div>

      

      <div className="letter_s">
    <p>
    It is with immense pride that we introduce to you the Oakridge Model United Nations Conference 2024. <br/><br/>

We aim to bring you an event filled with intellectual debates, insightful discussions, and making informed decisions, with an objective to create resolutions that make a difference. 
<br/><br/>
With our variety of committees, we provide you the opportunity to tackle complex socio-economic problems, from revisiting the significant events in the history of global dispute, to breaking down multiple perspectives of unsolved issues.
<br/><br/>
OAKMUN is an experience that allows you to gain insight from thought-provoking conversations, and opens the doors to network with the brightest minds across Bangalore. Research, collaboration, your political ideologies, as well as the ability to express them is at the heart of every good delegate, and it’s your active participation that will make this Model United Nations Conference a memorable one. 
<br/><br/>
Whether you are a seasoned MUNer or about to take your first steps in this circuit, it will be an enriching experience for all. As Benjamin Franklin said, “Tell me and I forget, teach me and I may remember, involve me and I learn”. Here’s a chance for you to get involved, and embark on a learning journey of global diplomacy and resolving complex global issues.  
<br/><br/>
OAKMUN assures you an engaging experience like no other, and our remarkable Executive Board and staff will guide you every step of the way. 
<br/><br/>
The floor is now yours. 
<br/><br/>
Welcome to OAKMUN. We’re pleased to have you. 
<br/><br/>
Regards,
Riya Iyengar
      </p>
      <hr style={{
        width:800,
        alignItems:'center',
        margin: '0 auto',         
          
        
      }}
      
      />
      </div>
      </div>
    </div>
  );
}

export default Letter;