import React from 'react';
import '../styles/styles.css'; 

export const AboutMe = () => {
    const openLinkedInLink = () => {
        const linkedinLink = 'https://www.linkedin.com/in/harmit-goswami/';
        window.open(linkedinLink, '_blank');
    };

    const openPontoonLink = () => {
        const pontoonLink = 'https://pontoon.mozilla.org';
        window.open(pontoonLink, '_blank');
    }

    return (
        <div>
            <h1>Hi!</h1>
            <br />
            <h3>My name is Harmit Goswami. Nice to meet you!</h3>
            <br />
            <p>
                I'm currently a 3rd year student at the University of Toronto studying Electrical and Computer Engineering.
            </p>
            <br />
            <p>
                I'm passionate about the internet, both the technical and social aspects of it. One of my career goals is to work on projects that make the internet better
                and more accessible for everyone, something I feel has become increasingly important in today's world.
            </p>
            <br />
            <p>
                Right now, I'm a Software Engineer Intern at Mozilla, working on  <button onClick={openPontoonLink} className='link-button'>Pontoon</button> 
                (Mozilla's localization platform).
            </p>
            <br />
            <p>
                In my free time, I love listening to music (my top artists are Frank Ocean, Aphex Twin, and Kendrick Lamar), watching TV shows (The Sopranos is my favourite), watching basketball, playing Pokémon, and reading.
                Feel free to reach out anytime about any of these topics!
            </p>
            <br />
            <p>LinkedIn: <button onClick={openLinkedInLink} className='link-button'>www.linkedin.com/in/harmit-goswami/</button></p>
            <p>Email: harmitgoswami@gmail.com</p>
            <div style={{marginLeft: '25%', marginTop: '5%'}}>
                <img src="harmit.jpg" style={{width: '280px'}} alt="Me at the Mozilla Toronto office" />
            </div> 
        </div>
    );
};
