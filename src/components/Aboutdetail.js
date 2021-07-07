import React, { Component } from 'react';
import {FaChevronRight} from 'react-icons/fa';
import './aboutdetail.css';

export default class Aboutdetail extends Component {
    render() {
        return (
                <div className='detail'>
                    <span className='arrowicon'>
                        <FaChevronRight/>
                    </span>
                    <span className='leftside'><strong>{this.props.leftside}:</strong></span>
                    <p> {this.props.rightside}</p>
                </div>
        )
    }
}
