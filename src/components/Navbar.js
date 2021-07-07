import React, { Component } from 'react';
import './navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.linksedit = React.createRef();
        this.state={
            activeClass:0,
            scrollHeight:0
        }
    }
    componentDidMount() {
        document.body.onscroll=()=>{
            var top=document.documentElement.scrollTop;
            var abouth=document.getElementById('about').offsetTop-150;
            var skillh=document.getElementById('skill').offsetTop-150;
            var serviceh=document.getElementById('services').offsetTop-150;
            var contacth=document.getElementById('contact').offsetTop-150;
            var projecth=document.getElementById('project').offsetTop-150;
            var x = document.getElementById('nav');
            var z = document.getElementById('upbtn');
            if (top > 70) {
                x.style.backgroundColor = 'rgba(0,0,0,0.9)';
                z.style.visibility = 'visible';
            }
            else {
                x.style.backgroundColor = 'transparent';
                z.style.visibility = 'hidden';
            }
            if(top>=0 &&top<abouth){
                this.setState({activeClass:0})
            }
            else if(top>abouth && top<skillh){
                this.setState({activeClass:1})
            }
            else if(top>skillh && top<serviceh){
                this.setState({activeClass:2})
            }
            else if(top>serviceh && top<projecth){
                this.setState({activeClass:3})
            }
            else if(top>projecth && top<contacth){
                this.setState({activeClass:4})
            }
            else{
                this.setState({activeClass:5})
            }
        }
        var links = this.linksedit.current.children;
        for (let i = 0; i < links.length; i++) {
            links[i].onclick =function () {
                var current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace('active', '');
                this.className += 'active';
            }
        }
    }
    render() {
        return (
            <div className='navbar' id='nav'>
                <ul className='links' ref={this.linksedit}>
                    <li className={this.state.activeClass===0?'active':null}><a href='#home'>Home
                    </a></li>
                    <li className={this.state.activeClass===1?'active':null}><a  href='#about'>About</a></li>
                    <li className={this.state.activeClass===2?'active':null}><a  href='#skill'>My Skills</a></li>
                    <li className={this.state.activeClass===3?'active':null}><a href='#services'>Services</a></li>
                    <li className={this.state.activeClass===4?'active':null}><a href='#project'>Projects</a></li>
                    <li className={this.state.activeClass===5?'active':null}><a  href='#contact'>Contact</a></li>
                </ul>
            </div>
        )
    }
}
