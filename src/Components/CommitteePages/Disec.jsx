import React from 'react'
import './Disec.css'
import Footer from '../Footer'

export default function Disec() {

    const boardMembers = [
        {
          name: "Darshan CP",
          title: "(Chair)",
          image: "/images/darshan.png",
          bio: "Darshan is a third-year law student at CMR University who, over the years, has participated in a plethora of Model United Nations conferences, holding various positions and responsibilities. Beyond MUNs, Darshan is an avid mooter, consistently demonstrating exceptional prowess in legal advocacy and argumentation, with numerous accolades attesting to his expertise. In addition to his academic and extracurricular pursuits, Darshan is also a seasoned performing artist with over 15 years of experience in Bharatanatyam, the classical art form. He has graced numerous prestigious national stages with his performances."
          
        },
        {
          image: "/images/riti.png",
        },
        {
          name: "Atharva Bhagat",
          title: "(Moderator)",
          image: "/images/atharva.png",
          quote: {
              text: "One of the penalties of refusing to participate in politics is that you end up being governed by your inferiors",
              attribution: "Plato"
            },
          bio: "Atharva is a seasoned MUNer, who exclusively attends UNSCs and DISECs and is well-versed in the nuances of international security and conflict. In his time MUNing, he’s done everything from making Iran admit to breaking 7 counts of international law in formal session and being voted the most evil EB member to invading countries and assassinating Osama bin Laden. He’s also a sharp-tongued-quick-thinking-nerdy-anti-capitalist-bibliophilic-hexaglot, leader of Oakridge’s Debate Club, an archer, and a questionably skilled pianist."
        
        },
        
      ];
  return (

    
    
        <>

<div className='background_container_disec'> </div>

<div className='disec'>
     <div className='disec__container'>
       <div className="disec_heading">
       <h1>Disarmament and International Security Committee(DISEC)</h1>
       </div>

       <div className="agenda_disec">
        <h2>
            Agenda: Discussing the funding of non state actors with special emphasis on the horn of Africa and the Red Sea region
        </h2>
    
       </div>

    

       <div className="desc_disec">
        <p>
        The heart of Earth trembles with relentless conflict. Each day in the Red Sea region begins with the harrowing sounds of gunfire and cries for peace. From Kivu’s jungles to Tehran’s streets, armed factions and rogue militias challenge governments struggling to control their vast, resource-rich territory. Rival factions, fueled by immense state funding, wage brutal wars for power and ideals. Governments in this region, plagued by corruption and inefficiency, battle internal insurgencies and external threats. The civilian population endures unimaginable suffering as cities are razed, countries torn apart, and communities displaced. As conflict escalates, the international community watches with growing alarm, fearing an unprecedented humanitarian catastrophe. Only time will reveal if the provinces embroiled in this conflict can weather the storm.
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

          <div className="member-name_d">
    <h2>
      Riti Prabhu
    </h2>
    </div>
<div className="member-title_d">
    <h2>
      (Vice-Chair)
    </h2>
    </div>

         
    </div>

     </div>
   



    <Footer/>
  
    </>
   
  )
}