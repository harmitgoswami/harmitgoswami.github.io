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

    const openSpotifyLink = () => {
        const spotifyLink = 'https://open.spotify.com/user/iwhdpjdgakbzlff41cqchpams?si=6c409b1dbccb4c06';
        window.open(spotifyLink, '_blank');
    }

    const openGoodreadsLink = () => {
        const goodreadsLink = 'https://goodreads.com/harmitgoswami';
        window.open(goodreadsLink, '_blank');
    }

    const getImgStyle = () => {
        if (window.matchMedia("(max-width: 640px)").matches) {
            // Mobile
            return {
                marginLeft: '18%', 
                marginTop: '2%',
            };
        } else {
            // Desktop
            return {
                marginLeft: '25%', 
                marginTop: '5%',
            };
        }
    };

    const getPhotoStyle = () => {
        if (window.matchMedia("(max-width: 640px)").matches) {
            // Mobile
            return {
                width: '200px',
                border: '3px solid rgb(211, 227, 225)'
            };
        } else {
            // Desktop
            return {
                width: '280px',
                border: '3px solid rgb(211, 227, 225)'
            };
        }
    }

    return (
        <div>
            <h1>Hi!</h1>
            <br />
            <h3>My name is Harmit Goswami. Nice to meet you!</h3>
            <br />
            <p>
                I've just finished my 3rd year at the University of Toronto studying Electrical and Computer Engineering.
            </p>
            <br />
            <p>
                I'm passionate about the Internet/Web, both the technical and social aspects of them. One of my career goals is to work towards making the Web better
                and more accessible for everyone, especially since the modern Web-surfing experience has become drastically worse in recent years.
            </p>
            <br />
            <p>
                Currently, I'm a Software Engineer Intern at Mozilla, working on <button onClick={openPontoonLink} className='link-button'>Pontoon </button>‎ 
                (Mozilla's translation management system).
            </p>
            <br />
            <p>
                In my free time, I love <button onClick={openSpotifyLink} className='link-button'>listening to music </button> (my top artists are Frank Ocean, Aphex Twin, and Kendrick Lamar). 
                I'm always watching a bunch of TV shows, with The Sopranos and 30 Rock being among my favourites. I also love playing volleyball and basketball (Lebron is my GOAT).
                When I'm not doing any of those, I'm usually either hanging with friends, playing Pokémon, or <button onClick={openGoodreadsLink} className='link-button'>reading </button>.
                Feel free to reach out anytime about any of these topics!
            </p>
            <br />
            <p>LinkedIn: <button onClick={openLinkedInLink} className='link-button'>www.linkedin.com/in/harmit-goswami/</button></p>
            <p>Email: harmitgoswami@gmail.com</p>
            <div style={getImgStyle()}>
                <img src="harmit.jpg" style={getPhotoStyle()} alt="Me at the Mozilla Toronto office" />
            </div> 
        </div>
    );
};
