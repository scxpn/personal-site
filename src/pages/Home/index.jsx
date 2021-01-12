import React from 'react';

import { FiGithub } from 'react-icons/fi';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { HiOutlineMailOpen } from 'react-icons/hi';
// import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

import Header from '../../components/Header';

import './index.css';


function Home() {
    const email = 'ubirajara2018@hotmail.com';
    const content = 'Hi SCXPN, I saw your website and I would like to know more about your work.'

    // const token = process.env.GITHUB_TOKEN
    // const { Octokit } = require("@octokit/core");
    // const octokit = new Octokit({ auth: `${token}` });
    // async function avatar() {
    //     const { data } = await octokit.request('GET /scxpn')
    //     return console.log(data)
    // }

    return (
        <div id="landing-page">

            <Header />

            <div className="landing-content">
                <a href="https://github.com/scxpn" target='_blank' rel='noreferrer'  className='container'>
                    <h2>GitHub</h2>
                    < FiGithub size={80} color="white" className="logo"/>
                </a>

                <a href="https://www.linkedin.com/in/scxpn/" target='_blank' rel='noreferrer' className='container'>
                        <h2>Linkedin</h2>
                        <AiFillLinkedin size={80} color="white" className="logo"/>
                </a>

                <a href="https://www.instagram.com/scxpn.py/" target='_blank' rel='noreferrer' className='container'>
                    <h2>Instagram</h2>
                    <AiOutlineInstagram size={80} color="white" className="logo"/>
                </a>

                <a href={`mailto:${email}?subject=${content}`} target='_blank' rel='noreferrer' className='container'>
                    <h2>E-mail</h2>
                    <HiOutlineMailOpen size={80} color="white" className="logo"/>
                </a>
            </div>

        </div>

    );
}

export default Home;