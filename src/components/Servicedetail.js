import React, { Component } from 'react';

export default class Servicedetail extends Component {
    render() {
        return (
            <div className='servicecard'>
                <div className='service-icon'>{this.props.icon}</div>
                <h4>{this.props.title}</h4>
                <p>{this.props.detail}</p>
            </div>
        )
    }
}
