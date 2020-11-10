import React from 'react';

import { Link } from 'react-router-dom';

import { FiGithub } from 'react-icons/fi';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { HiOutlineMailOpen } from 'react-icons/hi';


import '../styles/pages/landing.css';


function Landing() {
    const email = 'ubirajara2018@hotmail.com';
    const content = 'Hi SCXPN, I saw your website and I would like to know more about your work.'

    return (
        <div id="landing-page">

            <div className="primary-area">
                <div className='profile-photo'>
                    <Link to="/" className="landing-main-text">
                    <img src={'https://avatars0.githubusercontent.com/u/50757312?s=460&u=f6cfeb6e4d6d727059382f52226d81824640c555&v=4'} alt="Ubirajara Junior"/>
                   </Link>
                    
                </div>

                <div className="landing-text">
                    <h1>SCXPN</h1>

                    <p>The more beautiful world is make with code.</p>
                </div>
            </div>

            <div className="landing-content">
                <a href="https://github.com/scxpn" target='_blank' rel='noreferrer' className='link'>
                    <div className="container">
                        <h2>GitHub</h2>
                        < FiGithub size={80} className="logo"/>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/scxpn/" target='_blank' rel='noreferrer' className='link'>
                    <div className="container">
                        <h2>Linkedin</h2>
                        <AiFillLinkedin size={80} className="logo"/>
                    </div>
                </a>

                <a href="https://www.instagram.com/scxpn.py/" target='_blank' rel='noreferrer' className='link'>
                    <div className="container">
                        <h2>Instagram</h2>
                        <AiOutlineInstagram size={80} className="logo"/>
                    </div>
                </a>

                <a href={`mailto:${email}?subject=${content}`} target='_blank' rel='noreferrer' className='link'>
                    <div className="container">
                        <h2>E-mail</h2>
                        <HiOutlineMailOpen size={80} className="logo"/>
                    </div>
                </a>
            </div>

        </div>

    );
}

export default Landing;