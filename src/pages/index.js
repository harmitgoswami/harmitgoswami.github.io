import React, { useState, useEffect } from 'react';
import User from '../images/User018.ico';
import Folder from '../images/Folder016.ico';
import Project from '../images/App051.ico';
import Window from '../components/Window';
import {AboutMe} from '../data/AboutMe';
import {Projects} from '../data/Projects';
import {Experience} from '../data/Experience';
import '../styles/styles.css';

const IndexPage = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [openWindows, setOpenWindows] = useState({
    aboutMe: false,
    experience: false,
    projects: false
  });

  const [zIndex, setZIndex] = useState({
    aboutMe: 1,
    experience: 1,
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
      case 'experience':
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
          <img src={Folder} alt="Experience" className="icon" onClick={() => handleIconClick('experience')} />
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
      {openWindows.experience && (
        <div 
          style={getWindowStyles("experience")}
          onMouseDown={() => bringToFront('experience')}
        >
          <Window title="Work Experience (as of May 2025)" content={<Experience/>} onClose={() => handleClose('experience')} />
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
        <p>© Harmit Goswami 2025</p>
        <span className="time">{time}</span>
      </div>
    </div>
  );
}

export default IndexPage;

export const Head = () => <title>Home Page</title>
