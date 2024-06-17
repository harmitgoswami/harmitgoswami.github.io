import React from 'react';
import '../styles/styles.css'; 

export const Projects = () => {
    const openGithubLink = () => {
        const githubLink = 'https://github.com/harmitgoswami';
        window.open(githubLink, '_blank');
    };
    const openReceiptJournalLink = () => {
        const receiptJournalLink = 'https://pbase.com/harmit/receipt_journal';
        window.open(receiptJournalLink, '_blank');
    };

    return (
        <div>
            <h1>My Portfolio</h1>
            <br />
            <p>This website was inspired by Windows Vista, and the Windows (Frutiger) Aero design language. I chose a crab favicon because my name is similar to "hermit", like the hermit crab!</p>
            <br />
            <p>To see my software projects, check out my <button onClick={openGithubLink} className="link-button">GitHub</button> page.</p>
            <br />
            <p>Also, check out my <button onClick={openReceiptJournalLink} className="link-button">receipt journal!</button> This project spans over many years, and it serves
            as a way for me to keep track of my favourite moments with other people.</p>
            <br />
        </div>
    );
};
