import React from 'react';
import './AwardsCriteria.css';
import Footer from '../Footer';




export default function AwardsCriteria() {
  return (
    <>

<div className='background_container_ac'> </div>

 <div className='ac'>
      <div className='ac_container'>
        
      <div className="awards-criteria">
            <h1>AWARDS CRITERIA</h1>

            <p className="intro-text">
              Oakridge Model United Nations is, above all, a conference designed to
              teach, empower, and encourage student leadership within an
              academic environment. 
              For many delegates, winning a MUN award is considered the peak of MUN success.
              Whereas delegates should also make sure to thoroughly enjoy their experiences,
              engage fully in debate, and meet and work with other delegates,
              awards can still be an important part of a MUN conference, as a means to recognize
              delegates for their strong and effective participation and leadership in committee.
              This year, OakMUN will feature both individual and delegation awards,
              which will be presented at Closing Ceremonies on <i className="intro-text" >Sunday, November 10, 2024.</i>
            </p>

            <h2>Individual Awards:</h2>

            <p>
              Each committee will offer three categories of awards to its delegates: 
              Best Delegate, Outstanding Delegate, and Honorable Mention. 
              The number of awards available is dependent on committee size and organ.
              Award criteria is based on the following three categories of achievement:
            </p>

            <ol>
              <li>
                <h3>Participation:</h3>
                <ul>
                  <li>
                    This criteria seeks to evaluate the delegate's skill in impromptu
                    speaking, interaction with other delegations, and participation
                    strategy in committee sessions.
                  </li>
                  <li>
                    Participation will be evaluated both through participation in
                    the form of speeches, but also through leading debate,
                    sending private messages, engaging with other delegates and
                    the chairs, and writing working papers and resolutions.
                  </li>
                  <li>
                    Participation will also be evaluated based on a delegate's
                    ability to contribute to the general committee's course of
                    action and debate.
                  </li>
                </ul>
              </li>

              <li>
                <h3>Skill:</h3>
                <ul>
                  <li>
                    This criterion seeks to evaluate the delegate’s ability to speak with eloquence 
                    and conviction in committee sessions, to work well alongside other delegates 
                    in their block, and to maneuver and lead the committee through its discussion 
                    of the topics at hand.
                  </li>
                  <li>
                    Skill will not solely be evaluated on knowledge and fluency in MUN 
                    parliamentary procedure but also in public speaking, teamwork, 
                    and resolution writing skill as well.
                  </li>
                  <li>
                    Skill will also test the quality a delegate brings to crisis response 
                    and the substance they add to committee discussion as a whole.
                  </li>
                </ul>
              </li>

              <li>
                <h3>Sportsmanship:</h3>
                <ul>
                  <li>
                    The criteria of sportsmanship will evaluate the delegate’s ability to work 
                    alongside other delegates in their committee and to contribute to the general course of debate.
                  </li>
                  <li>
                    Delegates who push others to speak and perform well, who support the initiatives 
                    and goals of their peers, and who are able to effectively communicate 
                    and interact in a group setting alongside fellow delegates.
                  </li>
                  <li>
                    This criteria seeks to reward delegates who are able to effectively promote 
                    their own initiatives, while also serving as leaders in their committee 
                    that are able to teach and inspire others to participate and thrive.
                  </li>
                </ul>
              </li>
            </ol>

            <h2>Delegation Awards:</h2>

            <p>
              Delegation awards are decided based on the overall performance of delegates within a delegation. 
              There will be one Best Delegation Award for each category of delegation.
            </p>
          </div>
      
      </div>
    </div>

    <Footer/>
    

 
  
    </>
  );

}