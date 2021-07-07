import React, { Component } from 'react'
import './skills.css';
import Skilldetails from './Skilldetails';
import './services.css';

export default class Skills extends Component {
    render() {
        return (
            <div className='skill' id='skill'>
                <div className='title'>
                    <h1>My Skills</h1>
                    <span>What I'm Good At?<div className='line'></div></span>
                </div >
                <Skilldetails/>
            </div>
        )
    }
}
