import React from 'react';

import { FiGithub } from 'react-icons/fi';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { HiOutlineMailOpen } from 'react-icons/hi';

import Header from '../../components/Header'

import './index.css';


function Contact() {
    const email = 'ubirajara2018@hotmail.com';
    const content = 'Hi SCXPN, I saw your website and I would like to know more about your work.'

    return (
        <div id="landing-page">

            <Header />

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

export default Contact;