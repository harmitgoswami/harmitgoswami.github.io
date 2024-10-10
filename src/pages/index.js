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

  const [zIndex, setZIndex] = useState({
    aboutMe: 1,
    resume: 1,
    projects: 1
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

  const bringToFront = (windowName) => {
    setZIndex((prevState) => {
      const maxZIndex = Math.max(...Object.values(prevState)) + 1;
      return {
        ...prevState,
        [windowName]: maxZIndex
      };
    });
  };

  const getWindowStyles = (windowName) => {
    let windowPos;

    switch(windowName) {
      case 'aboutMe':
        windowPos = ['2%', '10%'];
        break;
      case 'resume':
        windowPos = ['25%', '50%'];
        break;
      case 'projects':
        windowPos = ['50%', '50%'];
        break;
      default:
        windowPos = ['50%', '50%'];
    }
  
    if (window.matchMedia("(max-width: 640px)").matches) {
      // Mobile
      return {
        position: 'absolute',
        top: '5%',
        left: '5%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '90%',
        zIndex: zIndex[windowName]
      };
    } else {
      // Desktop
      return {
        position: 'absolute',
        top: windowPos[0],
        left: windowPos[1],
        transform: 'translate(-50%, -50%)',
        zIndex: zIndex[windowName]
      };
    }
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
        <div 
          style={getWindowStyles("aboutMe")}
          onMouseDown={() => bringToFront('aboutMe')}
        >
          <Window title="About Me" content={<AboutMe />} onClose={() => handleClose('aboutMe')} />
        </div>
      )}
      {openWindows.resume && (
        <div 
          style={getWindowStyles("resume")}
          onMouseDown={() => bringToFront('resume')}
        >
          <Window title="Résumé (as of October 2024)" content={<Resume/>} onClose={() => handleClose('resume')} />
        </div>
      )}
      {openWindows.projects && (
        <div 
          style={getWindowStyles("projects")}
          onMouseDown={() => bringToFront('projects')}
        >
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
