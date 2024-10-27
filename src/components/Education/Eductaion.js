import React, { useEffect } from 'react';
import './Education.css';
import isimsLogo from '../../assets/isims.png';

const Education = () => {
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
        <section id="education">
            <span className="educationTitle">Education</span>
            <div className="experienceTree">
                <div className="experienceRow">
                    <div className="experienceLeaf">
                        <div className="leafContent">
                            <div className="imageAndTitle">
                                <img src={isimsLogo} alt="Bachelor's Degree in Computer Science Engineering"/>
                                <h2>Bachelor’s Degree in Management Computer Science</h2>

                            </div>
                            <h4>Higher School of Digital Economy of Manouba</h4> {/* Changed h3 to h1 */}
                            <h4>2018 - 2021</h4>
                        </div>


                    </div>
                    <div className="experienceLeaf">
                        <div className="leafContent">
                            <div className="imageAndTitle">
                                <img src={isimsLogo} alt="Bachelor's Degree in Computer Science Engineering"/>
                                <h2>Bachelor’s Degree in Management Computer Science</h2>
                            </div>
                            <h4>Higher School of Digital Economy of Manouba</h4> {/* Changed h3 to h1 */}
                            <h4>2018 - 2021</h4>

                        </div>

                    </div>
                </div>

            </div>
            <div className="horizontal-line"></div>
        </section>
    );
};

export default Education;
