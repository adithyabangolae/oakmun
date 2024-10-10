import React from 'react'
import './Ccc.css'
import Footer from '../Footer'

export default function Ccc() {

    const boardMembers = [
        {
          name: "Ananya Khare",
          title: "(Head-Chair)",
          image: "/memberImages/ananya.png",
          quote: {
            text: "Because freedom, I am told, is nothing but the distance between the hunter and its prey.",
            attribution: "Ocean Vuong"
          },
          bio: "Ananya Khare is a hurricane disguised as the loudest laugh in the room. Having placed in all but one of the MUNs she’s participated in, Ananya specialises in crisis and semi-crisis committees. Being a free verse poet, Ananya dismantles arguments with stupefying ease and makes sure you open a dictionary while she does it. A death stare coupled with a “delegate, are you insinuating” is merely the calm before the storm. An avid reader of war poetry, backroom diplomacy is her forte. A heartfelt indie music connoisseur, Ananya is easily the best researched person in most rooms. When not with a German thesaurus, you can find her playing the flute or watching breadtube for hours on end with the biggest mug of hot dark chocolate."
        },
        {
          name: "Mueez Hassan",
          title: "(Vice-Chair)",
          image: "/memberImages/mueez.png",
          quote: {
            text: "Someone must extinguish thy flame",
            attribution: null
          },
          bio: "Filled with passion for debate, Mueez is an avid MUNner, having participated in many MUNs. He loves getting into arguments about nearly any topic (mostly politics), which explains his love for the chaos of an MUN. For him, the one committee that he fell in love with immediately was CCC. Apart from MUNs, Mueez loves playing whatever roguelike or soulslike game he sets his eyes on (currently tackling Elden Ring)."
        
        },
        {
            name: "Aarav Kejriwal",
            title: "(Moderator)",
            image: "/memberImages/aarav.png",
            quote: {
              text: "Chaos was the law of nature; Order was the dream of man.",
              attribution: null
            },
            bio: "The first ever directive he wrote was no longer than this very paragraph, but genius knows no bounds. Aarav Kejriwal never fails to propel the committee into chaos with unparalleled precision and meticulously detailed directives. From flying a plane into the Berlin Wall to the glorified assassination of Adolf Hitler (he thinks he’s funny), his directives dominate the crisis update. Wielding an inexplicable urge to be the harbinger of chaos, He receives pleasure watching delegates cower in fear thanks to his ability to find holes within any argument and is always ready to pick apart a delegate for the smallest errors. Most often recognized by his tenacity and speeches which transcend the ordinary."

          
          },
          {
            image: "/memberImages/arryaa.jpg",
            
            
          },
      ];
  return (

    
    
        <>

<div className='background_container_ccc'> </div>

<div className='ccc'>
     <div className='ccc__container'>
       <div className="ccc_heading">
       <h1>Continuous Crisis Committee(CCC)</h1>
       </div>

       <div className="agenda_ccc">
        <h2>
            Agenda: Operation Iraqi freedom
        </h2>
    
       </div>

       <div className="freeze_ccc">
        <h2>
            Freeze date: March 19, 2003
        </h2>
    
       </div>


       <div className="desc_ccc">
        <p>
        In the wake of 9/11 comes the global challenges posed by Bush and the American “war on terror”. 2003 marks a tumultuous time in the Middle East. Escalating tensions regarding resources threaten regional stability, extremist and terrorist groups seek to radicalize the region against the West, while Saddam continues to brutalize the Kurdish people. It seems there is no greater time or excuse for the US to launch a full-scale military operation in Iraq, at last, a target has been acquired in response to the devastating events of September 11th, 2001. Yet as the world questions the validity of such an invasion, they remain unaware of the road that the United States and their coalition forces have just gone down, a path that has the potential to lead us to catastrophe.
        </p>
       </div>

       <hr style={{
            width:1500,
            alignItems:'center',
            marginTop:40,  
            marginBottom:40      
          }}
          
          />

<div className="executive-board">
      <h1 className="board-title">Meet your Executive Board</h1>
      {boardMembers.map((member, index) => (
        <React.Fragment key={index}>
          <div className={`board-member ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div className="member-image-container">
              <img src={member.image} alt={member.name} className="member-image" />
            </div>
            <div className="member-info">
              <h2 className="member-name">{member.name} <span className="member-title">{member.title}</span></h2>
              {member.quote && (
  <div className="member-quote">
    <p>
      "{member.quote.text}"
      {member.quote.attribution && (
        <span className="quote-attribution"> — {member.quote.attribution}</span>
      )}
    </p>
  </div>
)}
              <p className="member-bio">{member.bio}</p>
            </div>
          </div>
          {index < boardMembers.length - 1 && <hr className="member-divider" />}
        </React.Fragment>
      ))}
    </div>
    
<div className="member-name_a">
    <h2>
      Arryaa Oduru
    </h2>
    </div>
<div className="member-title_a">
    <h2>
      (Crisis Director)
    </h2>
    </div>

     </div>
   </div>



    <Footer/>
  
    </>
   
  )
}