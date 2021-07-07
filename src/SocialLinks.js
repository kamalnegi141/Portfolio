import React, { Component } from 'react';
import {FaLinkedinIn,FaGithub,FaEnvelope} from 'react-icons/fa';
import './sociallinks.css';

export default class SocialLinks extends Component {
    render() {
        return (
            <div className='social'>
                <div className="social__box">
                 <div className="social__box__links">
                 <span><a href='https://www.linkedin.com/in/kamal-negi-939b7a1b9/' target='blank'><FaLinkedinIn/></a></span>
                <span><a href='https://github.com/kamalnegi141/'><FaGithub/></a></span>
                <span><a href='mailto:kamalnegi141@gmail.com'><FaEnvelope/></a></span>
                 </div>
                
                </div>

                
            </div>
        )
    }
}
