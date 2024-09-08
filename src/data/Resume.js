import React from 'react';

export const Resume = () => {
    const openGoogleDriveLink = () => {
        const googleDriveLink = 'https://drive.google.com/file/d/1T_s3GhmiBk4ZFPJdhKEdqIyHV3nKD8aC/view?usp=sharing';
        window.open(googleDriveLink, '_blank');
    };

    return (
        <div>
            <h1>Résumé</h1>
            <br />     
            <p>Whether you're a recruiter or a fellow student,
                feel free to reach out if you want to know more about any of my experiences! :^)
                </p>
            <br />
            <p>(NOTE: Clicking the button below opens a Google Drive link in a new tab)</p>
            <br />
            <button onClick={openGoogleDriveLink} className='resume-button'>Open</button>
        </div>
    );
};
