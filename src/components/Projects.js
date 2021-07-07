import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProjectCard from './ProjectCard';
import './project.css';

const carouselOption = {
    dots: true,
    loop: true,
    className: 'owl-theme',
    dotsClass: 'owl-dots',
    margin: 30,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        800: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
}

export default class Projects extends Component {
        render() {
            return (
                <div className='projects' id='project'>
                    <div className='title'>
                        <h1>Projects</h1>
                        <span>What I've Done?<div className='line'></div></span>
                    </div >
                    <div className='carousel'>
                        <OwlCarousel {...carouselOption}>
                            <ProjectCard src='https://d33wubrfki0l68.cloudfront.net/5faec580e9c2eb00cb19b6d5/screenshot.png' title='Random Quote Generator' timetaken=' 2-3 days ' projectdes='Build a random quote generator which generates random quotes from a no of quotes stored in an array.' links='https://kamalrandomquotes.netlify.app'/>
                            <ProjectCard src='https://d33wubrfki0l68.cloudfront.net/5fad55542e698b3de3608f0d/screenshot.png' title='Quiz App' timetaken=' 2-3 days ' projectdes='Build a quiz app using basics of react , used to conduct a quiz from a set of questions stored in an array. ' links='https://kamalquizapp.netlify.app'/>
                            <ProjectCard src='https://d33wubrfki0l68.cloudfront.net/5fb928ed9314afa1b9a31797/screenshot.png' title='Calculator' timetaken=' 2-3 days ' projectdes='Build an basics mathematics calculator using react, used to perform a basics mathematical operations.' links='https://kamalcalculator.netlify.app'/>
                            <ProjectCard src='https://d33wubrfki0l68.cloudfront.net/5fba6e04706b22a9370b715f/screenshot.png' title='Product Landing Page ' timetaken=' 3-4 days ' projectdes='Build an product landing page using html and css, used to showcase various products. ' links='https://fervent-yonath-b624b5.netlify.app'/>
                            <ProjectCard src='https://d33wubrfki0l68.cloudfront.net/5fba033d649aedece875eed7/screenshot.png' title='Survey Form' timetaken=' 1-2 days ' projectdes='Build a survey form using html and css , used to take a quick survey about a particular product or website.' links='https://compassionate-jackson-898f69.netlify.app'/>
                            <ProjectCard src='https://d33wubrfki0l68.cloudfront.net/5fba6e25706b22adaf0b7001/screenshot.png' title='Technical Documentation Page' timetaken=' 2-3 days ' projectdes='Build a techical documentation page using html and css, used to gather information about the latest technologies' links='https://nifty-nobel-536138.netlify.app'/>
                        </OwlCarousel>
                    </div>
                </div>
            )
        }
    }
