import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireimg.png'
import {Link} from "react-scroll";
import filePath from '../../assets/Cv Fazzani Souhir.pdf'
const Intro = () => {
    return (
        <div>
            <section id="intro">
                <div className="introContent">
                    <span className="hello">Hello</span>
                    <span className="introText">I'm <span
                        className="introName">Souhir</span><br/>Software engineer</span>

                </div>
            </section>
        </div>
    );
};

export default Intro;
