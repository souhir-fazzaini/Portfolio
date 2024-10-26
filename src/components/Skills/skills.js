import React from 'react';
import './skills.css';
import img from '../../assets/img.png'
const skills = () => {
    return (
        <section id="skills">
<span className="skillTitle">
    What i do
</span>
            <p className="introPara">As a software development engineer, I am seeking a challenging opportunity
                to apply my skills in a professional
                environment. <br/>
                I have successfully led projects that improved system performance by 30% . <br/>
                demonstrating my
                commitment to leveraging technology to solve complex problems.
                <br/> My goal is to contribute to innovative projects
                and further enrich my professional experience through tangible achievements and impactful
                solutions.</p>
            <div className="skillBar">
                <div className="skillBarText">
                    <h2>Backend Development</h2>
                    <p>Spring Boot, Laravel, .NET, PHP</p>
                </div>
            </div>
            <div className="skillBar">
                <div className="skillBarText">
                    <h2>Frontend Development</h2>
                    <p>Angular, Vue.js, React, HTML, CSS, Bootstrap, Ionic</p>
                </div>
            </div>
            <div className="skillBar">
                <div className="skillBarText">
                    <h2>Database Management</h2>
                    <p>MySQL, SQL Server, Elasticsearch</p>
                </div>
            </div>
            <div className="skillBar">
                <div className="skillBarText">
                    <h2>Tools & Technologies</h2>
                    <p> Jira, Bitbucket, Slack, Git, Trello, JasperReports, Karate Framework</p>
                </div>
            </div>
        </section>
    );
};

export default skills;
