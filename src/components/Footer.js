import React, { Component } from 'react';
import './footer.css';
import {FaRegCopyright} from 'react-icons/fa'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <p>Copyright <span><FaRegCopyright/></span> 2021 by Kamal Negi.All rights reserved.</p>
            </div>
        )
    }
}
