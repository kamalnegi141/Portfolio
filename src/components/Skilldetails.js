import React, { Component } from 'react'
import { FaGraduationCap, FaBookOpen,  FaCode } from 'react-icons/fa';
import './skilldetail.css';

export default class Skilldetails extends Component {
    render() {
        return (
            <div className='skilldetail'>
                <div className='skill-menu'>
                    <h3 className='resume-title'><span><FaGraduationCap /></span>Education</h3>
                    <div className='resume-item'>
                        <h4><span><FaBookOpen /></span>Bachelor Of Technology</h4>
                        <h5 className='year'>2018 - 2022</h5>
                        <p>
                            <em>College Of Engineering Roorkee,Roorkee</em>
                        </p>
                        <p>The term engineering comes from Latin word Ingenium means Cleverness and Ingeniare means ' to create '. Engineering is more fun than studying.
                        You get matured enough to realise how difficult can the life be and how strong you need to be to face the world.
                            </p>
                    </div>
                    <div className='resume-item'>
                        <h4><span><FaBookOpen /></span>Higher Secondary Education</h4>
                        <h5 className='year'>2016 - 2017</h5>
                        <p>
                            <em>
                                Saraswati Academy,Haldwani
                                </em>
                        </p>
                        <p>Your career goals comes to be a reality after your secondary education. After this you get to see the real world and are ready to face the world and all the challenges which your life brings in front of you.</p>
                    </div>
                </div>
                <div className='skill-menu'>
                    <h3 className='resume-title'><span><FaCode /></span>Skills</h3>
                    <div className='resume-item'>
                        <h5>Html</h5>
                        <p>Primary building block of a website, used to create a website.</p>
                    </div>
                    <div className='resume-item'>
                        <h5>Css</h5>
                        <p>Brings design flexibility and interactivity to web devlopment.</p>
                    </div>
                    <div className='resume-item'>
                        <h5>Bootstrap</h5>
                        <p>Framework which helps to deign website faster and easier.</p>
                    </div>
                    <div className='resume-item'>
                        <h5>Sass</h5>
                        <p>Extension of CSS that enables to use things like variables,nested rules and inline imports.</p>
                    </div>
                    <div className='resume-item'>
                        <h5>Jquery</h5>
                        <p>Lightweight,"write less,do more".JavaScript library.</p>
                    </div>
                    <div className='resume-item'>
                        <h5>JavaScript</h5>
                        <p>make web pages dynamic and interactive by implementing custom client-side scripts.</p>
                    </div>
                    <div className='resume-item'>
                        <h5>React.js</h5>
                        <p>Open-source JavaScript library that is used for building user interfaces specifically for single-page applications.</p>
                    </div>
                </div>

            </div>
        )
    }
}
