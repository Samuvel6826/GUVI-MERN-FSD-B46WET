import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll'

function Intro() {
  return <>
  <section id="intro">
    <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Samuvel</span><br/>MERN Stack Developer</span>
        <p className="introPara">
        I am a skilled and passionate web designer with experience in creating <br/>visually appealing and user-friendly websites.
        </p>
        <a href='https://docs.google.com/document/d/1B7PID7DPV9e5WarIMxmwLvE2mVjsm3tx90pSsE5WkbM/edit' target='blank'><button className="btn">Resume</button></a>
    </div>
    <img src={bg} alt="Profile" className="bg" />
  </section>
  </>
}

export default Intro