import React, { Component } from 'react';
import './clientinfo.css';

export default class Clientinfo extends Component {
   render() {
        return (
            <div className='cinfo'>
                <span style={{color: this.props.color}}>{this.props.icon}</span>
                <div className='cinfo-detail'>
                    <h1>0</h1>
                    <p><span><strong>{this.props.title}</strong></span>{this.props.detail}</p>
                </div>
            </div>
        )
    }
}
