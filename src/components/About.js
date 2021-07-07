import React, { Component } from 'react'
import './about.css';
import Aboutdetail from './Aboutdetail';
import Clientinfo from './Clientinfo';
import {FaRegClock,FaBookOpen} from 'react-icons/fa';

export default class About extends Component {
    render() {
        return (
            <div className='about' id='about'>
                <div className='title'>
                    <h1>About Me</h1>
                    <p>Let the door of life be open for opportunities</p>
                </div>
                <div className='about-details'>
                    <div className='image'></div>
                    <div className='mydetails'>
                        <div className='det'>
                            <ul className='left'>
                                <li>
                                    <Aboutdetail leftside='Name' rightside='Kamal Negi'/>
                                </li>
                                <li>
                                    <Aboutdetail leftside='Website' rightside='www.exapmle.com'/>
                                </li>
                                <li>
                                    <Aboutdetail leftside='E-mail' rightside='example@gmail.com'/>
                                </li>
                            </ul>
                            <ul className='right'>
                                <li>
                                    <Aboutdetail leftside='Age' rightside='20'/>
                                </li>
                                <li>
                                    <Aboutdetail leftside='Degree' rightside='Bachelor'/>
                                </li>
                                
                                <li>
                                    <Aboutdetail leftside='Freelance' rightside='Available'/>
                                </li>
                            </ul>
                        </div>
                        <div className='iconsdel'>
                            <ul className='left'>
                                <li>
                                </li>
                                <li>
                                    <Clientinfo icon={<FaRegClock/>} color='#1abc9c' title='Years of Experience ' detail=' helped me to achieve my goals and clients.'/>
                                </li>
                            </ul>
                            <ul className='right'>
                                <li>
                                    <Clientinfo icon={<FaBookOpen/>} color='  #8e44ad ' title='Projects' detail=' allows to showcase the skills and gives an impact of the person.'/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
