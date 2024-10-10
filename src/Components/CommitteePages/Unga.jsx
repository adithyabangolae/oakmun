import React from 'react'
import './Unga.css'
import Footer from '../Footer'

export default function Unga() {

    const boardMembers = [
        {
          name: "Nickul Pahwa",
          title: "(Chair)",
          image: "/assets/nickul.png",
          quote: {
            text: "It’s either you be dominated or dominate, and i always prefer to do the latter.",
            attribution: null
          },
          bio:"Being a part of the mun circuit for over 6 years now,he has been part of over 16 conferences with accolades in most of them,with a versatile skill set from lobbying to international law,he’s become a very decorated delegate,other than muns and public speaking he does boxing and is a national level boxer and loves to listen to music"
        },
        {
          name: "Venkat Rangan",
          title: "(Vice-Chair)",
          image: "/assets/venkat.png",
          quote: {
            text: "It’s not who I am underneath but what I do that defines me",
            attribution: "Batman"
          },
          bio:"Currently pursuing his 12th in SJISC, Venkat’s deep-seated passion for international law and diplomacy has ultimately guided him to his present standing. He is renowned for his candid and expressive speeches, coupled with his lighthearted demeanor outside of committee, effortlessly engaging with all delegates, showcasing his exceptional social skills. He holds a soft corner for those first timers especially the back room delegates. In addition to his MUN pursuits, he actively engages in commerce festivals and sports during his leisure time. Venkat also enjoys thought-provoking discussions on current affairs and cricket( but make sure you don’t go against VK)"

          
        },
      
          {
            name: "Shachi Sahai",
            title: "(Moderator)",
            image: "/assets/shachi.png",
            bio: "As an aspiring scientist, Shachi Sahai brings a unique blend of experiences and expertise, both inside and outside the MUN circuit. From serving as a delegate, and volunteering for the International Press Corps, to moderating last year, Shachi discovered her passion for analyzing position papers and leading dynamic discussions.Her interests go far beyond MUN, spanning everything from serology, toxicology, and weaponry to fiber arts, baking, and Muay Thai—an eclectic mix that showcases her curiosity and drive"
          
          },
          {
            name: "Ruhaan Jaiswal",
            title: "(Moderator)",
            image: "/assets/ruhaan.png",
            bio: "Having been primarily a Security Council delegate and having attended 10 muns with a near-perfect placement record, Ruhaan would like to take a step back and help delegates reform the very committee he loves as part of OAKMUN 2024’s UNGA. Presenting the proud moderator of the soon-to-be best committee of Oakmun 2024."
          
          },
      ];
  return (

    
    
        <>

<div className='background_container_Unga'> </div>

<div className='Unga'>
     <div className='Unga__container'>
       <div className="Unga_heading">
       <h1>United Nations General Assembly(UNGA)</h1>
       </div>

       <div className="agenda_Unga">
        <h2>
            Agenda: Re-evaluating the security council's P5 system in the context of international copperation
        </h2>
    
       </div>

       <div className="desc_Unga">
        <p>
        The structure of the United Nations is one of the most polarizing concepts under the scope of the UNGA’s revisionist philosophy. Legally the most complex agenda at Oakridge Model United Nations, the P5 system of the security council reigns supreme as the subject of debate in the General Assembly. It’s in this committee that delegates will understand the technical workings of the United Nations down to their finest details as well as question the very values with which the organization was established in the aftermath of history’s most gruesome conflict.
        
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