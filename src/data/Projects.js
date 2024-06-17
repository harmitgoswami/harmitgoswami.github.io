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
            <h1>Check out some of my projects!</h1>
            <br />
            <p>To see my software projects, check out my <button onClick={openGithubLink} className="link-button">GitHub</button> page.</p>
            <br />
            <p>Also, check out my <button onClick={openReceiptJournalLink} className="link-button">receipt journal!</button> This project spans over many years, and it serves
            as a way for me to keep track of my favourite moments with other people.</p>
            <br />
        </div>
    );
};
