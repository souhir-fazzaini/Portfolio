import React from 'react';
import './intro.css';
import bg from '../../assets/Souhir.png'
import btnImg from '../../assets/hireimg.png'
import {Link} from "react-scroll";
import filePath from '../../assets/CV_Elfazzaini_Souhir.pdf'
const Intro = () => {
    return (
        <div>
            <section id="intro">
                <div className="introContent">
                    <span className="hello">Hello</span>
                    <span className="introText">I'm <span
                        className="introName">Souhir</span><br/>Software engineer</span>
                    <a href={filePath} download>
                        <button className="btn">Download CV</button>
                    </a>
                </div>
                <img src={bg} alt="Profile" className="bg"/>
            </section>
        </div>
    );
};

export default Intro;
