import React from 'react';
import './Schedule.css';
import Footer from '../Footer';

export default function Schedule() {
  return (
    <>
      <div className='schedule'>
        <div className='schedule__container'>
          <div className="schedule_heading">
            <h1>OakMUN Schedule</h1>
          </div>

          <div className="schedule-item">
            <h3>Friday, November 8</h3>
          </div>

          <div className="schedule-column">
            <p><strong>Internal Registrations:</strong> 7:30 to 8:30</p>
            <p><strong>External Registrations:</strong> 8:15 to 8:45</p>
            <p><strong>Opening Ceremony:</strong> 9:00 to 10:00</p>
            <p><strong>Snack Break:</strong> 10:00 to 10:30</p>
            <p><strong>Committee Session 1:</strong> 10:30 to 1:30</p>
            <p><strong>Lunch 1 (IPC, UNHRC, UNSC, AIPPM):</strong> 1:00 to 1:30</p>
            <p><strong>Lunch 2 (UNGA, DISEC, CCC, Comm X):</strong> 1:30 to 2:00</p>
            <p><strong>Committee Session 2:</strong> 2:00 to 3:45</p>
            <p><strong>Dispersal:</strong> 3:45 to 4:15</p>
          </div>

          <hr style={{
            width: 800,
            alignItems: 'center',
            margin: '0 auto',
            marginTop: -20,
            marginBottom: 60
          }} />

          <div className="schedule-item">
            <h3>Saturday, November 9</h3>
          </div>

          <div className="schedule-column">
            <p><strong>Bag Checks:</strong> 7:30 to 8:30</p>
            <p><strong>Committee Session 3:</strong> 8:30 to 10:00</p>
            <p><strong>Snack Break:</strong> 10:00 to 10:15</p>
            <p><strong>Committee Session 4:</strong> 10:15 to 1:30</p>
            <p><strong>Lunch 1 (IPC, UNHRC, UNSC, AIPPM):</strong> 1:00 to 1:30</p>
            <p><strong>Lunch 2 (UNGA, DISEC, CCC, Comm X):</strong> 1:30 to 2:00</p>
            <p><strong>Committee Session 5:</strong> 2:00 to 4:00</p>
            <p><strong>Dispersal and Snack Break:</strong> 4:00 to 4:30</p>
            <p><strong>Socials:</strong> 4:30 to 6:30</p>
            <p><strong>Dispersal:</strong> 6:30 to 7:30</p>
          </div>

          <hr style={{
            width: 800,
            alignItems: 'center',
            margin: '0 auto',
            marginTop: -20,
            marginBottom: 50
          }} />

          <div className="schedule-item">
            <h3>Sunday, November 10</h3>
          </div>

          <div className="schedule-column">
            <p><strong>Bag Checks:</strong> 7:30 to 8:30</p>
            <p><strong>Committee Session 6:</strong> 8:30 to 10:00</p>
            <p><strong>Snack Break:</strong> 10:00 to 10:15</p>
            <p><strong>Committee Session 7:</strong> 10:15 to 11:15</p>
            <p><strong>Closing Ceremony:</strong> 11:30 to 1:15</p>
            <p><strong>Dispersal:</strong> 2:00 to 3:00</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
