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
            <p> ̶W̶h̶e̶t̶h̶e̶r̶ ̶y̶o̶u̶'̶r̶e̶ ̶a̶ ̶r̶e̶c̶r̶u̶i̶t̶e̶r̶ ̶o̶r̶ ̶a̶ ̶f̶e̶l̶l̶o̶w̶ ̶s̶t̶u̶d̶e̶n̶t̶,̶ ̶f̶e̶e̶l̶ ̶f̶r̶e̶e̶ ̶t̶o̶ ̶r̶e̶a̶c̶h̶ ̶o̶u̶t̶ ̶i̶f̶ ̶y̶o̶u̶'̶d̶ ̶l̶i̶k̶e̶ ̶t̶o̶ ̶l̶e̶a̶r̶n̶ ̶m̶o̶r̶e̶ ̶a̶b̶o̶u̶t̶ ̶a̶n̶y̶ ̶o̶f̶ ̶m̶y̶ ̶e̶x̶p̶e̶r̶i̶e̶n̶c̶e̶s̶!̶ ̶:̶^̶)̶
                </p>
            <br />
            <p> ̶(̶N̶O̶T̶E̶:̶ ̶C̶l̶i̶c̶k̶i̶n̶g̶ ̶t̶h̶e̶ ̶b̶u̶t̶t̶o̶n̶ ̶b̶e̶l̶o̶w̶ ̶o̶p̶e̶n̶s̶ ̶a̶ ̶G̶o̶o̶g̶l̶e̶ ̶D̶r̶i̶v̶e̶ ̶l̶i̶n̶k̶ ̶i̶n̶ ̶a̶ ̶n̶e̶w̶ ̶t̶a̶b̶)̶</p>
            <br />
            <p style={{marginLeft: '28%'}}>⚠️ UNDER CONSTRUCTION ⚠️</p>
            <br />
            <button onClick={openGoogleDriveLink} className='resume-button' disabled={true}>Open</button>
        </div>
    );
};
