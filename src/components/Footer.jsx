import "./FooterStyles.css";

import React from 'react';

import {FaMailBulk, FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='email'>
                <h4>About Me</h4>
                <p>I'm a creative at heart with a passion for web-development</p>
                <br/>
                    <h4>Questions?</h4>
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                        hello@reyreyaviles.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>This site was proudly built by me using ReactJS & MaterialUI </h4>
                <div className='social'>
                <a href='https://www.linkedin.com/in/reyaviles/'>
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "2rem"}}/>
                </a>
                <a href='https://www.instagram.com/reyreyaviles/'>
                <FaInstagram size={30} style={{color:"#fff", marginRight: "2rem"}}/>
                </a>
                <a href='https://github.com/reyaviles'>
                <FaGithub size={30} style={{color:"#fff", marginRight: "2rem"}}/>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer