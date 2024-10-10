import React from 'react'
import './Xcommittee.css'
import Footer from '../Footer'

export default function Xcommittee() {

    const boardMembers = [
        {
          name: "Abbas Ahmed",
          title: "(Chair)",
          image: "/images/abbas.png",
           bio: "Abbas Ahmed is a dedicated and passionate sophomore law student at Ramaiah College of Law, where he actively pursues his commitment to justice and advocacy. He has a strong academic background and has honed his skills in leadership, public speaking, and legal research through participation in moot court competitions, where he has been recognized with wins and awards such as Best Advocate. Abbas has also excelled in parliamentary debates and chaired multiple Model United Nations conferences across the nation, garnering accolades for his contributions. Currently, Abbas is gaining practical legal experience as a Legal Junior at Halo Partners and serves as the Convening President of the Electoral Literacy Club at Ramaiah College of Law. His volunteer work with organizations like Hamara Trust and 40seconds underscores his dedication to social upliftment and human rights advocacy."

          
        },
        {
          name: "Nagappan Arun",
          title: "(Vice-Chair)",
          image: "/images/nagappan.png",
          bio:"Starting his mun journey in GA Committees, Nagappan quickly rose to prominence in Crisis Committees, securing Best Delegate awards at top conferences like CJCMUN, AMUN, and DOCMUN. Outside the world of mun, Nagappan is an aspiring economist aiming to join the Indian Foreign Service. When he’s not immersed in the world of diplomacy, you can find him editing Wikipedia pages or vibing to Olivia Rodrigo."
          
        },
        {
            name: "Soumyajit Roy",
            title: "(Moderator)",
            image: "/images/soumyajit.png",
            bio: "Soumyajit Roy, the moderator for Committee X at OakMUN 2024, has an impressive track record, including Outstanding Delegate at Harvard MUN 2024 and Best Delegate at Greenwood MUN 2024, along with a Commendable Delegate award at NEEV MUN 2023, to name a few. Known for his charismatic personality, creative problem-solving, and powerful voice, he excels at lobbying and fostering engaging debates. While he enjoys stirring up excitement and creating drama, he always ensures everyone is included. Passionate about current global affairs and building impactful solutions. He is eager to see what OakMUN brings and is excited to make the most of the conference."
          
          },
      ];
  return (

    
    
        <>

<div className='background_container_x'> </div>

<div className='x'>
     <div className='x__container'>
       <div className="x_heading">
       <h1>Commitee X</h1>
       </div>

       <div className="agenda_x">
        <h2>
            Agenda: Classified
        </h2>
    
       </div>

       <div className="freeze_x">
        <h2>
            Freeze date: June 12, 1933
        </h2>
    
       </div>

       <div className="desc_x">
        <p>
        Shh...
        
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