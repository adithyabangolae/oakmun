import React from 'react'
import './Ipc.css'
import Footer from '../Footer'

export default function Ipc() {

    const boardMembers = [
        {
          name: "Aditi Agarwal",
          title: "(International Head of Press)",
          image: "/memberImages/aditi.png",
          quote: {
            text: "How was I supposed to know there’d be consequences for my actions?",
            attribution: "Gina Linetti"
          },
          bio:"As someone who initially didn’t consider herself a munn kind of person’, Aditi discovered she was wrong (very rare occurrence) and hasn’t looked back since. A phenomenal public speaker and talented debater, she has excelled in the realm of MUNs in her short time in the circuit. She’s particularly biased towards the IPC as, in her words, ‘there’s lesser research and everyone is scared of you.’ If she’s not on her hundredth rewatch of her favourite sitcoms, you can find her painting, sleeping, or wondering what she does with her free time."
          
        },
        {
          name: "Kuhu Jha",
          title: "(International Head of Press)",
          image: "/memberImages/kuhu.png",
          bio:"From stage fright to centre stage, having spectated in participated in committees on far end of the spectrum, she holds the ability to thrive in any environment. Having been part of the executive board at prestigious conferences like AMUN, GWHMUN, and CISMUN, she hosts a variety of skill to domineer an audience and guide any committee."
          
        },
        {
            name: "Pratham Ram Gowda",
            title: "(Assistant Head of Press)",
            image: "/memberImages/pratham.png",
            quote: {
                text: "In the midst of chaos, there is also opportunity",
                attribution: "Sun Tzu"
              },
          
          },
      ];
  return (

    
    
        <>

<div className='background_container_ipc'> </div>

<div className='ipc'>
     <div className='ipc__container'>
       <div className="ipc_heading">
       <h1>International Press Corps(IPC)</h1>
       </div>

       <div className="agenda_ipc">
        <h2>
            Agenda: Correlation Vs. causuality in the context of the media 
        </h2>
    
       </div>

       <div className="desc_ipc">
        <p>
        The International Press Corps a bastion of informational integrity, will have a unique role to play at OakMUN 2024. As representatives of the free press and media, you will consider the importance of correlation vs. causality two concepts in media that are applicable to the spread of half-baked and misconstrued information. The threats to posed to lack of understanding of these are significant, whether physical or mental, and with the growing secrecy pervading the world’s inner circles, these threats only grow. To find a solution at this juncture is not only a matter of public deliberation but also a matter of right and wrong. Delegates, the future of the reliable press is in your hands.
        
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