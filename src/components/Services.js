import React, { Component } from 'react';
import Servicedetail from './Servicedetail';
import { FaRegWindowMaximize, FaLaptopCode, FaAddressCard } from 'react-icons/fa';
import { MdDevices } from 'react-icons/md';

export default class Services extends Component {
    render() {
        return (
            <div className='services' id='services'>
                <div className='title'>
                    <h1>Services</h1>
                    <span>What I Do?<div className='line'></div></span>
                </div >
                <div className='servicedetail'>
                    <Servicedetail icon={<FaAddressCard />} title='Frontend Devlopment' detail='Proficient in the latest frontend technologies such as Angular,React and Sass.' />
                    <Servicedetail icon={<FaRegWindowMaximize />} title='Web App Devlopment' detail='Another area of my skill and expertise, that needs special mention is the devlopment of custom web applications.' />
                    <Servicedetail icon={<FaLaptopCode />} title='Clean Coding' detail='Code is kept clean and optimised as per professional standards.' />
                    <Servicedetail icon={<MdDevices />} title='Responsive Design' detail='My designs are device friendly across all platforms and screen sizes.' />
                </div>
            </div>
        )
    }
}
