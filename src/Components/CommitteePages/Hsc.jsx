import React from 'react'
import './Hsc.css'
import Footer from '../Footer'

export default function Hsc() {

    const boardMembers = [
        {
          name: "BS Chetan Swaroop Reddy",
          title: "(Co-Chair)",
          image: "/memberImages/chetan.png",
          quote: {
            text: "It’s either you be dominated or dominate, and i always prefer to do the latter.",
            attribution: null
          },
          
        },
        {
          name: "Rito Sarkar",
          title: "(Co-Chair)",
          image: "/memberImages/rito.png",
          quote: {
            text: "Sure bub. Let’s think.",
            attribution: null
          },
          
        },
        {
            name: "Sourav Satish",
            title: "(Moderator)",
            image: "/memberImages/sourav.png",
            bio: "Sourav, the moderator of UNSC, is a 10th-grade student who has rapidly gained recognition in the MUN circuit. Despite starting his MUN journey less than three years ago, he has attended 10 conferences with a almost perfect placement record. His accolades include successes at prestigious conferences such as GWH MUN , DMUN, SNIS MUN and many more.Outside the world of MUN, Sourav is passionate about football and has dedicated his entire life playing it and he loves supporting Man City. He’s excited to join the team for the first edition of the conference and looks forward to making this event a memorable one."
          
          },
      ];
  return (

    
    
        <>

<div className='background_container_hsc'> </div>

<div className='hsc'>
     <div className='hsc__container'>
       <div className="hsc_heading">
       <h1>Historical Security Council(HSC)</h1>
       </div>

       <div className="agenda_hsc">
        <h2>
            Agenda: The cuban missile crisis
        </h2>
    
       </div>

       <div className="freeze_hsc">
        <h2>
            Freeze date: Octobor 22, 1962
        </h2>
    
       </div>

       <div className="desc_hsc">
        <p>
        History and geopolitics is filled with heavyweight battles. In 1962, two of the self-proclaimed leaders of the new world order stepped into the ring for a fight that threatened to the end the world as we know it. An American U2 Spy Plane has just found Russian missiles stationed in Castro’s Cuba, and the Security Council convenes on October 22nd, 1962 right after Kennedy has revealed such information to the distressed American public. The tipping point of rising USA-USSR tensions during the Cold War couldn’t possibly come any closer as ideological warfare takes a turn for the worse. Delegates representing countries in the UNSC will ensure not only the prevention of war and mutual nuclear destruction, but the establishment of a new term of peace in the Cold War era, a 20th century conflict that threatens the fabric of society to this day.
        <br/><br/>
       <b> (Note: This is a double delegation commitee)</b>
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
                  <div className={`member-info ${!member.bio ? 'center-content' : ''}`}>
                    <h2 className="member-name">{member.name} <span className="member-title">{member.title}</span></h2>
                    {member.quote && (
                      <div className={`member-quote ${!member.bio ? 'centered-quote' : ''}`}>
                        <p>
                          "{member.quote.text}"
                          {member.quote.attribution && (
                            <span className="quote-attribution"> — {member.quote.attribution}</span>
                          )}
                        </p>
                      </div>
                    )}
                    {member.bio && <p className="member-bio">{member.bio}</p>}
                  </div>
                </div>
                {index < boardMembers.length - 1 && <hr className="member-divider" />}
              </React.Fragment>
            ))}
          </div>

     </div>
   </div>



    <Footer/>
  
    </>
   
  )
}