import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll'
import works from "../Works/works";
import menu from '../../assets/menu.png';
import bg from '../../assets/Souhir.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(prevShowMenu => !prevShowMenu); // Toggle menu visibility
    };
    return (
        <div>


            <nav className="navbar">
                <img src={logo} alt="logo" className="logo"/>
                <div className="desktopMenu">
                    <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500}
                          className="desktopMenuListItem">
                        Home
                    </Link>
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={500}
                          className="desktopMenuListItem">About</Link>
                    <Link activeClass="active" to="education" spy={true} smooth={true} offset={-30} duration={500}
                          className="desktopMenuListItem">
                        Education
                    </Link>
                    <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-30} duration={500}
                          className="desktopMenuListItem">
                        Experiences
                    </Link>
                    <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500}
                          className="desktopMenuListItem">Portfolio</Link>
                </div>
                <button className="desktopMenubtn" onClick={() => {
                    document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'})
                }}>
                    <img src={contactImg} alt="" className="desktopMenImg"/>
                    <p style={{ marginRight: '2rem' }}>Contact Me</p> {/* Inline style */}

                </button>
                <img src={menu} alt="Menu" className="mobMenu" onClick={toggleMenu}/>
                <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                    <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500}
                          className="desktopMenuListItem">
                        Home
                    </Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}
                          className="desktopMenuListItem">
                        About
                    </Link>
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500}
                          className="desktopMenuListItem">
                        Skills
                    </Link>
                    <Link activeClass="active" to="education" spy={true} smooth={true} offset={-100} duration={500}
                          className="desktopMenuListItem">
                        Education
                    </Link>
                    <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500}
                          className="desktopMenuListItem">
                        Experiences
                    </Link>


                    <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500}
                          className="desktopMenuListItem">
                        Portfolio
                    </Link>
                    <button className="desktopMenubtn" onClick={() => {
                        document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'})
                    }}>
                        <img src={contactImg} alt="" className="desktopMenImg"/>
                        <p style={{marginRight: '2rem'}}>Contact Me</p> {/* Inline style */}

                    </button>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;
