import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/Facebookicon.png';
import twitterIcon from '../../assets/twitteIcon.png';
import instagramIcon from '../../assets/instagramIcon.png';
import youtubeIcon from '../../assets/youtubeIcon.png';
import emailjs from '@emailjs/browser';

const Contact = () => { // Changed from 'contact' to 'Contact'
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_6s4nnsz', 'template_bzftj07', form.current, {
                publicKey: 'pFkzUFhrHf6OoyUki',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert('Email sent !')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section id="contactPage">
            <div className="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your name" name="your_name"/>
                    <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link"/>
                        <img src={twitterIcon} alt="Twitter" className="link"/>
                        <img src={instagramIcon} alt="Instagram" className="link"/>
                        <img src={youtubeIcon} alt="YouTube" className="link"/>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact; // Changed to 'Contact'
