import React, { Component } from 'react';
import './contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div className='contacts' id='contact'>
                <div className='title'>
                    <h1>Contact</h1>
                    <span>Get In Touch!<div className='line'></div></span>
                </div >
                <form className='contact-form'>
                    <div className='name-mail'>
                        <input type='text' id='name' placeholder='Your Name' required></input>
                        <input type='email' id='email' placeholder='Your Email' required></input>
                    </div>
                    <div className='subject-message'>
                        <input type='text' id='subject' placeholder='Subject' required></input>
                        <textarea placeholder='Message' id='message' rows='5'></textarea>
                        <button className='submitbtn'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
