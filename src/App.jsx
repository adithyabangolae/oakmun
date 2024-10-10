import React from 'react';
import NavBar from './Components/NavBar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home';
import Resources from './Components/pages/Resources';
import AboutUs from './Components/pages/AboutUs';
import Byk from './Components/CommitteePages/Byk';
import Ccc from './Components/CommitteePages/Ccc';
import Hsc from './Components/CommitteePages/Hsc';
import Xcommittee from './Components/CommitteePages/Xcommittee';
import Disec from './Components/CommitteePages/Disec';
import Unga from './Components/CommitteePages/Unga';
import Hrc from './Components/CommitteePages/Hrc';
import Ipc from './Components/CommitteePages/Ipc';
import Schedule from './Components/pages/Schedule';
import AwardsCriteria from './Components/pages/AwardsCriteria';
import Registrations from './Components/pages/Registrations';
import DatesAndDeadLines from './Components/pages/DatesAndDeadlines';
import Faqs from './Components/pages/Faqs';

const App = () => {
  return (
    
    <>
    <Router>
    <NavBar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/Byk" exact element={<Byk/>} />
        <Route path="/Ccc" exact element={<Ccc/>} />
        <Route path="/Hsc" exact element={<Hsc/>} />
        <Route path="/Disec" exact element={<Disec/>} />
        <Route path="/Unga" exact element={<Unga/>} />
        <Route path="/Hrc" exact element={<Hrc/>} />
        <Route path="/Xcommittee" exact element={<Xcommittee/>} />
        <Route path="/Ipc" exact element={<Ipc/>} />
        <Route path="/resources" exact element={<Resources/>} />
        <Route path="/registrations" exact element={<Registrations/>} />
        <Route path="/aboutus" exact element={<AboutUs/>} />
        <Route path="/schedule" exact element={<Schedule/>} />
        <Route path="/register" exact element={<Registrations/>} />
        <Route path="/faqs" exact element={<Faqs/>} />
        <Route path="/datesAndDeadlines" exact element={<DatesAndDeadLines/>} />
        <Route path="/awardscriteria" exact element={<AwardsCriteria/>} />
      </Routes>
    </Router>
  </>

          
  )
}

export default App;
