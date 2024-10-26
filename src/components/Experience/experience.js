import React, { useEffect } from 'react';
import './experience.css';

const Experience = () => {
    useEffect(() => {
        const experienceLeaves = document.querySelectorAll('.experienceLeaf');

        const handleScroll = () => {
            experienceLeaves.forEach((leaf) => {
                const leafTop = leaf.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (leafTop < windowHeight - 100) {
                    leaf.classList.add('active');
                } else {
                    leaf.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="experience">
            <span className="experienceTitle">Experiences</span>
            <span className="experienceDesc">
                As a software development engineer, I am seeking a challenging opportunity to apply my skills in a professional environment.
            </span>
            <div className="experienceTree">
                <div className="experienceRow">
                    <div className="experienceLeaf">
                        <div className="leafContent">
                            <h2>Software Engineering Internship: TUNEALGO</h2>
                            <h4>JAN 2024 - JUL 2024</h4>
                            <p>During this internship, I'm contributing to a mobile social networking app that allows users to share services and communicate easily. My work includes developing key features like profile creation, real-time messaging, and service posting, while using Spring Boot for the backend and Firebase for notifications. I'm also focused on creating a seamless cross-platform experience on Android and iOS with Ionic. This opportunity is enhancing my technical skills and knowledge of user-centered design.         </p>               </div>
                    </div>
                    <div className="experienceLeaf">
                    <div className="leafContent">
                            <h2>Software Engineering Internship: CSFAG</h2>
                        <h4>Jun 2023 - Aug 2023</h4>
                            <p>

                                During my internship at CSFAG, I contributed to developing a comprehensive training management application, focusing on an intuitive interface, user authentication, and automated certificate generation using JasperReports. I used Angular for the frontend, Spring Boot for the backend, and MySQL for data management. Our team achieved a 40% improvement in operational efficiency by simplifying attendance tracking. This experience enhanced my skills in web application development and project management in an Agile/Scrum environment.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="experienceRow">
                    <div className="experienceLeaf">
                        <div className="leafContent">
                            <h2>Software Engineering Internship: Psexpress</h2>
                            <h4>Jun 2022 - Aug 2022</h4>
                            <p>
                                I utilized HTML, CSS, and Bootstrap to create an attractive and responsive user interface for the application. This design approach ensured that the interface was visually appealing and user-friendly across various devices. Additionally, I developed features that allow users to add, update, and delete products seamlessly. These functionalities not only enhance user experience but also provide efficient management of product data within the application.</p>
                        </div>
                    </div>
                    <div className="experienceLeaf">
                        <div className="leafContent">
                            <h2>Web Developer Internship: Arru</h2>
                            <h4>Feb 2021 - Jun 2021</h4>
                            <p>Integrated geolocation services for managing and visualizing projects, improving tracking accuracy and enabling real-time updates for 100+ projects.
                                Built Laravel modules for project and user management, improving efficiency for many users and projects.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="horizontal-line"></div>
        </section>
    );
};

export default Experience;
