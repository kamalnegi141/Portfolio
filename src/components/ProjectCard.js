import React, { Component } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

export default class ProjectCard extends Component {
    render() {
        return (
            <div className='project-card'>
                <img src={this.props.src} alt='Project Image'></img>
                <div className='card-detail'>
                    <h3>{this.props.title}</h3>
                    <p><span><FaCalendarAlt /></span>({this.props.timetaken})</p>
                    <p className='project-des'>{this.props.projectdes}</p>
                    <a href={this.props.links} target='blank'>Click here to visit site.</a>
                </div>
            </div>
        )
    }
}
