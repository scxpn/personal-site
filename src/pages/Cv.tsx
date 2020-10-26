import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import { ImFilePdf } from 'react-icons/im';
import { FiArrowLeft } from 'react-icons/fi';

import '../styles/pages/cv.css'

function Cv() {
    
    return(
        <div id="cv-page">
            <div className="header">
                <Link to="/">
                    <FiArrowLeft size={20} color="#FFF" />
                </Link>
                <h1>Currículo</h1>
            </div>

            <div className="cv">
                <div className="cv-document">
                    <h1>Ubirajara Rodrigues da Silva Junior</h1>
                </div>

                <div className="information">
                    <h2>Baixe o currículo profissional para mais detalhes</h2>
                </div>

                <div className="pdf-icon" >
                    <Link to='/files/cv.pdf' target='_blank' download className="cv-download">
                        <ImFilePdf size={70} color='#ACE' className="cv-download-image" />
                        <p>Download</p>
                    </Link>
                </div>
            </div>
        </div>
        
    );
}

export default Cv;