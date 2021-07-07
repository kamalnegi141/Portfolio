import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { FaChevronUp } from 'react-icons/fa';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialLinks from './SocialLinks';
import Projects from './components/Projects';
import Loader from './components/Loader';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  componentDidMount() {
    setTimeout(() =>
      this.setState({ isLoading: false })
      , 4000);
  }

  handleScroll = () => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 200)
  }
  render() {
    return (
      <section>
        {this.state.isLoading ? (<Loader />) : (
          <div className='App'>
            <SocialLinks />
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Contact />
            <Footer />
            <button className='up' id='upbtn' onClick={this.handleScroll}><FaChevronUp /></button>
          </div>
        )}
      </section>
    )
  }
}
