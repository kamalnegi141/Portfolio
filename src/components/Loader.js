import React, { Component } from 'react'
import './loader.css';

export default class Loader extends Component {
    render() {
        return (
            <div className='loading'>
                <div className='loader'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}
