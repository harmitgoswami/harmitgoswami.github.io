import React, { useState, useEffect } from 'react';
import User from '../images/User018.ico';
import Folder from '../images/Folder016.ico';
import Projects from '../images/App051.ico';
import styled, { createGlobalStyle } from 'styled-components';
import Window from '../components/Window';

// Global style reset
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundImage: 'url("./vista.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff'
};

const mainStyles = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 100px',
};

const iconContainerStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  maxWidth: '600px',
};

const footerStyles = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  padding: '20px',
  color: '#fff',
  zIndex: 100,
  backgroundColor: 'rgb(22,23,25)',
  background: 'linear-gradient(0deg, rgba(22,23,25,1) 35%, rgba(159,160,159,1) 65%)',
  opacity: 0.93,
};

const timeStyle = {
  marginLeft: 'auto',
};

const Icon = styled.img`
  width: 10%;

  @media (max-width: 1200px) {
    width: 8%;
  }

  @media (max-width: 992px) {
    width: 10%;
  }

  @media (max-width: 768px) {
    width: 12%;
  }

  @media (max-width: 576px) {
    width: 30%;
  }
`;

const IndexPage = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [openWindows, setOpenWindows] = useState({
    aboutMe: false,
    resume: false,
    projects: false
  });
  const [aboutMeContent, setAboutMeContent] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch('/data/aboutme.html')
      .then(response => response.text())
      .then(text => setAboutMeContent(text))
      .catch(error => console.error('Error loading about me content:', error));
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
    <>
      <GlobalStyle />
      <main style={pageStyles}>
        <div style={mainStyles}>
          <div style={iconContainerStyles}>
            <Icon src={User} alt="About me" onClick={() => handleIconClick('aboutMe')} />
            <Icon src={Folder} alt="Resume" onClick={() => handleIconClick('resume')} />
            <Icon src={Projects} alt="Projects" onClick={() => handleIconClick('projects')} />
          </div>
        </div>
       
        {openWindows.aboutMe && (
          <div style={{ position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)' }}>
            <Window title="About Me" content={aboutMeContent} onClose={() => handleClose('aboutMe')} />
          </div>
        )}
        {openWindows.resume && (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Window title="Resume" content="RESUME" onClose={() => handleClose('resume')} />
          </div>
        )}
        {openWindows.projects && (
          <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Window title="Projects" content="PROJECTS" onClose={() => handleClose('projects')} />
          </div>
        )}
         <div style={footerStyles}>
          <p>© 2024 Harmit Goswami</p>
          <span style={timeStyle}>{time}</span>
        </div>
      </main>
    </>
  );
}

export default IndexPage;

export const Head = () => <title>Home Page</title>
