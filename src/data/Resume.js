import React from 'react';

export const Resume = () => {
    const openGoogleDriveLink = () => {
        const googleDriveLink = 'https://drive.google.com/file/d/1Nt4MLZLh3n2giUnlpz43SLWzzKK5Q0mB/view?usp=sharing';
        window.open(googleDriveLink, '_blank');
    };

    return (
        <div>
            <h1>Résumé</h1>
            <br />
            <p>Open my résumé in a new tab?</p>
            <br />
            <p>(For an up-to-date version, please email me at harmitgoswami@gmail.com)</p>
            <br />
            <button onClick={openGoogleDriveLink} style={{marginLeft: '50%'}}>Open</button>
        </div>
    );
};
