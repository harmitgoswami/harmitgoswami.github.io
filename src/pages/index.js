import React, { useState, useEffect } from 'react';
import User from '../images/User018.ico';
import Folder from '../images/Folder016.ico';
import Project from '../images/App051.ico';
import Window from '../components/Window';
import {AboutMe} from '../data/AboutMe';
import {Projects} from '../data/Projects';
import {Resume} from '../data/Resume';
import '../styles/styles.css';

const IndexPage = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [openWindows, setOpenWindows] = useState({
    aboutMe: false,
    resume: false,
    projects: false
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleIconClick = (windowName) => {
    setOpenWindows((prevState) => ({
      ...prevState,
      [windowName]: true
    }));
  };

  const handleClose = (windowName) => {
    setOpenWindows((prevState) => ({
      ...prevState,
      [windowName]: false
    }));
  };

  return (
    <div className="page">
      <main className="main">
        <div className="icon-container">
          <img src={User} alt="About me" className="icon" onClick={() => handleIconClick('aboutMe')} />
          <img src={Folder} alt="Resume" className="icon" onClick={() => handleIconClick('resume')} />
          <img src={Project} alt="Project" className="icon" onClick={() => handleIconClick('projects')} />
        </div>
      </main>

      {openWindows.aboutMe && (
        <div style={{ position: 'absolute', top: '5%', left: '10%', transform: 'translate(-50%, -50%)' }}>
          <Window title="About Me" content={<AboutMe />} onClose={() => handleClose('aboutMe')} />
        </div>
      )}
      {openWindows.resume && (
        <div style={{ position: 'absolute', top: '5%', left: '30%', transform: 'translate(-50%, -50%)' }}>
          <Window title="Résumé (as of September 2023)" content={<Resume/>} onClose={() => handleClose('resume')} />
        </div>
      )}
      {openWindows.projects && (
        <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Window title="Projects" content={<Projects />} onClose={() => handleClose('projects')} />
        </div>
      )}
      <div className="footer">
        <p>© Harmit Goswami 2024</p>
        <span className="time">{time}</span>
      </div>
    </div>
  );
}

export default IndexPage;

export const Head = () => <title>Home Page</title>
