import React from 'react'
import './Disec.css'
import Footer from '../Footer'

export default function Disec() {

    const boardMembers = [
        {
          name: "Darshan CP",
          title: "(Chair)",
          image: "/assets/darshan.png",
          bio: "Darshan is a third-year law student at CMR University who, over the years, has participated in a plethora of Model United Nations conferences, holding various positions and responsibilities. Beyond MUNs, Darshan is an avid mooter, consistently demonstrating exceptional prowess in legal advocacy and argumentation, with numerous accolades attesting to his expertise. In addition to his academic and extracurricular pursuits, Darshan is also a seasoned performing artist with over 15 years of experience in Bharatanatyam, the classical art form. He has graced numerous prestigious national stages with his performances."
          
        },
        {
          image: "/assets/riti.png",
        },
        {
            name: "Atharva Bhagat",
            title: "(Moderator)",
            image: "/assets/atharva.png",
            quote: {
                text: "One of the penalties of refusing to participate in politics is that you end up being governed by your inferiors",
                attribution: "Plato"
              },
            bio: "Sourav, the moderator of UNSC, is a 10th-grade student who has rapidly gained recognition in the MUN circuit. Despite starting his MUN journey less than three years ago, he has attended 10 conferences with a almost perfect placement record. His accolades include successes at prestigious conferences such as GWH MUN , DMUN, SNIS MUN and many more.Outside the world of MUN, Sourav is passionate about football and has dedicated his entire life playing it and he loves supporting Man City. He’s excited to join the team for the first edition of the conference and looks forward to making this event a memorable one."
          
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