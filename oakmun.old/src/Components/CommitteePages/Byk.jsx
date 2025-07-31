import React from 'react'
import './Byk.css'
import Footer from '../Footer'

export default function Byk() {

    const boardMembers = [
        {
          name: "Arpita Joshi",
          title: "(Head-Chair)",
          image: "images/arpita.png",
          quote: {
            text: "A good lawyer knows the law, a great lawyer knows the judge.",
            attribution: null
          },
          bio: "Arpita Kenshin Joshi, a second-year law student at PES University, has made a lasting mark in the MUN circuité since 2018. With an outstanding record, her expertise shines in parliamentary debates, particularly in the Indian committees. Having held prestigious roles over the course of multiple renowned conferences, her leadership and strategic insight have consistently set her apart.  Beyond MUNs, Arpita is a seasoned mooter, combining her sharp legal acumen with her passion for debate. Her exceptional skills in advocacy and argumentation have earned her a reputation as an intellectual powerhouse, capable of dissecting complex political and legal issues with ease."
        },
        {
          name: "Aniketh Kudva",
          title: "(Vice-Chair)",
          image: "images/aniketh.png",
          quote: {
            text: "Mind is not the problem, the mindset is.",
            attribution: "Narendra Modi"
          },
          bio: "Brace yourselves for a deadly combo- Aniketh and Indian committees. With a remarkable 100% placement record and placements in prestigious conferences like NCFEMUN, DWMUN, GEARMUN, SFMUN, and others, his skill to blend debate and diplomacy with a hint of controversy makes him stand out of the crowd. His love for politics and Mr. Modi are only matched by his dedication, passion for debate and his powerful speeches. With his blend of intellect, charisma, and tenacity, Aniketh is a force to be reckoned with in any debate. Dominant and gritty, he’s just warming up for the future."
        
        },
        {
            name: "Avyan Singh",
            title: "(Moderator)",
            image: "images/avyan.png",
            quote: {
              text: "तस्मात्त्वमुत्तिष्ठ यशो लभस्व",
              attribution: null
            },
            bio: "Avyan, a fairly new but distinguished delegate in the circuit, has quickly risen to become the soul of any Indian committee. From calling delegates “nalayak” to representing an Owaisi at almost every committee he’s been to, he will surely be the most energetic and entertaining person in the room.An aspiring lawyer, his interests lie in Indian politics and debate. It’s his dynamic speeches, lobbying and goofy yet detailed directives that capture the attention of his fellow delegates and the executive board. He has accolades in several conferences like DMUN and NWMUN, and has also been a member of the executive board in conferences like GMUN and DMUN."
          
          },
      ];
  return (

    
    
        <>

<div className='background_container_byk'> </div>

<div className='byk'>
     <div className='byk__container'>
       <div className="byk_heading">
       <h1>Bharatiya Yudh Kaksh(BYK)</h1>
       </div>

       <div className="agenda_byk">
        <h2>
            Agenda: Delibration on Indo-China relations with special reference on the NEFA region
        </h2>
    
       </div>

       <div className="freeze_byk">
        <h2>
            Freeze date: October 26, 1962
        </h2>
    
       </div>

       <div className="desc_byk">
        <p>
        The backdrop of war threatens India on the Eastern front, as two superpowers that were supposed to be the trailblazers of the Asian century stand on the knife’s edge of a devastating confrontation. Mao vs. Nehru dominates the news amidst the backdrop of territorial tension and the potential to escalate into a wider war. Delegates in the Bharatiya Yudh Kaksh will orchestrate, criticize, and attempt to resolve the calamitous state of Sino-Indian relations. Policies of both past and present reign supreme, and the power to change the world as we know it, lies in the hands of those that command and oppose India. A nation that knows the effects of blatant imperialism all too well.
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

     </div>
   </div>



    <Footer/>
  
    </>
   
  )
}