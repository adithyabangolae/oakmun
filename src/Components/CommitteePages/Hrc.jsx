import React from 'react'
import './Hrc.css'
import Footer from '../Footer'

export default function Hrc() {

    const boardMembers = [
        {
          name: "Samiksha VB",
          title: "(Chair)",
          image: "/memberImages/samiksha.png",
          quote: {
            text: "The unexamined life is not worth living.",
            attribution: "Socrates"
          },
          bio:"Since 2019, Samiksha has dominated the Model United Nations circuit. Renowned for her mastery as a General Assembly delegate, she effortlessly commands debates, dissecting complex global issues with unmatched precision and intellect. Currently pursuing a Bachelor’s degree in Commerce at Manipal, Bangalore, Samiksha’s academic journey complements her rise as an excellent delegate. Beyond MUNs, she is a true multi-talent whose brilliance, charm, and creativity makes her presence unforgettable for all who cross her path."
          
        },
        {
          name: "Vivaan Sheth",
          title: "(Vice-Chair)",
          image: "/memberImages/vivaan.png",
          bio:"Vivaan has attended 15+ MUNs, placing in prestigious conferences such as CJCMUN, DMUN, AJMUN, BLR JMUN, etc. He’s also served on the executive board twice previously and was the Director General for the Oakridge JMUN in 2023. As someone who believes a good MUN is all about balance, you can count on him to make sure the committee is both extremely hilarious and rigorously debate intensive. Outside of MUNs, Vivaan spends his free time at the track Go-Karting (Where he’s eligible to race at a national level)."
        
          
        },
        {
            name: "Suhani Singh",
            title: "(Moderator)",
            image: "/memberImages/suhani.png",
            quote: {
                text: "Therefore, society is everything and society is nothing",
                attribution: "Virginia Woolf"
              },
            bio: "A charismatic and enthusiastic individual, Suhani makes up for her lack of height with her sheer ingenuity. Having placed in nearly every committee she’s set foot in, she leads her peers to success. Suhani is a history nerd and a literature lover, with a very clear argumentative streak. Known for her bright smile and bubbly personality, she is sure to baffle any delegate with a myriad of questions the moment they give her the opportunity."
          
          },
          {
            name: "Myra Kulkarni",
            title: "(Moderator)",
            image: "/memberImages/myra.png",
            bio: "Being very passionate about arguing (for the right reasons), Myra Kulkarni is a debate enthusiast with an impressive 85% placement rate out of the six MUNs she’s been to as a delegate, including, most recently, the Harvard Model United Nations as Honorable Delegate among 17,000 delegates from around the world. When she’s not MUNning, she loves reading, listening to music, or doing stuff that’s totally unhinged."
          
          },
      ];
  return (

        <>

<div className='background_container_hrc'> </div>

<div className='hrc'>
     <div className='hrc__container'>
       <div className="hrc_heading">
       <h1>Human Rights Council(HRC)</h1>
       </div>

       <div className="agenda_hrc">
        <h2>
            Agenda: Deliberating upon extrajudicial killings of vulnerable communities
        </h2>
    
       </div>


       <div className="desc_hrc">
        <p>
        The UNHRC convenes at Oakridge Model United Nations, with the goal of tackling an issue that presents its sheer fatality in multiple facets. Delegates will navigate the horrors faced by minorities and vulnerable communities around the world, and tackle one of the most brutal faces of marginalization. A marginalization that is taken part in by more people than meets the eye.
       
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