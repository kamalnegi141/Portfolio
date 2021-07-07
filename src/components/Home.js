import React, { Component } from 'react';
import './home.css';
import {FaChevronDown} from 'react-icons/fa';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.homedet=React.createRef();
        this.cursor=React.createRef();
    }
    componentDidMount(){
        var i=0;
        var j=0;
        var arr=["Web Developer",'Web Designer','Freelancer','Software Developer'];
        var txt=arr[j];
        j++;
        var x=this.homedet.current;
        var y=this.cursor.current;
        y.style.display='none';
        function type(){
            if(i<txt.length){
                y.style.display='block'
                x.innerHTML+=txt.charAt(i);
                i++;
                setTimeout(type,100);
            }
            
            else{
                x.innerHTML+='.';
                y.style.marginLeft='5px';
                setTimeout(function(){
                    if(j===arr.length){
                        j=0;
                    }
                    x.innerHTML='';
                    txt=arr[j];
                    j++;
                    i=0;
                    y.style.marginLeft='0px';
                },1000)  
                setTimeout(type,1000)
            }
        }
        
        setTimeout(type,0)
    }
    handleClick=()=>{
        setTimeout(()=>{
            var x=document.getElementById('home').clientHeight;
            window.scroll(0,x);
        },300)
    }
    render() {
        return (
            <div className='home' id='home'>
                <div className='intro'>
                    <h2>It's</h2>
                    <span>Kamal Negi</span>
                    <div className='detail-intro'>
                        <div className='name'>
                            <p ref={this.homedet}></p>
                            <span className='cursor' ref={this.cursor}></span>
                        </div>
                    </div>   
                        <button className='icon' onClick={this.handleClick}><FaChevronDown/></button>
                </div>
                
            </div>
        )
    }
}
