import React from 'react';

export const Experience = () => {

    const openBlogLink = () => {
        const blogLink = "https://blog.mozilla.org/l10n/2025/04/28/lost-and-found-in-translation-my-internship-story/";
        window.open(blogLink, "_blank");
      };

      const openSkunkworksLink = () => {
        const link = " https://www.ddskunkworks.com/bridge";
        window.open(link, "_blank");
      };

    return (
        <div>
          <h1>Work Experience</h1>
          <br />
          <p>
            I primarily have experience in full-stack development, leveraging tools like
            JavaScript/TypeScript (React), Python (Django), Java, Git, and Google Cloud Platform.
          </p>
          <br />
          <p>Here's some places I've worked at previously:</p>
          <ul>
            <li>
              <strong>Amazon</strong>: <em>SDE Intern</em>, Summer 2025
              <ul>
                <li>Team: Pick UI (Amazon Fulfillment Technologies)</li>
                <li>Tools: TypeScript (React), Java (Spring Boot)</li>
              </ul>
            </li>
            <li>
              <strong>Mozilla</strong>: <em>SWE Intern</em>, 2024-2025
              <ul>
                <li>Team: <button onClick={openBlogLink} className='link-button'>Localization </button> (Firefox Org)</li>
                <li>Tools: TypeScript (React), Python (Django), GCP</li>
              </ul>
            </li>
            <li>
              <strong>D&D Skunkworks</strong>: <em>Full-stack Dev Intern</em>, Summer 2023
              <ul>
                <li>Team: <button onClick={openSkunkworksLink} className='link-button'>Web Projects </button></li>
                <li>Tools: TypeScript (React), tRPC, MySQL, Tailwind CSS</li>
              </ul>
            </li>
          </ul>
          <br />
          <p>If you'd like to learn more or see my résumé, feel free to reach out over email!</p>
        </div>
      );  
};
