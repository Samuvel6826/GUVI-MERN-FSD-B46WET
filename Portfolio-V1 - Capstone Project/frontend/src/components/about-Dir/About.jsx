import React from 'react'
import './about.css'

function About() {
  return <>
      <section id="about">
        <h1 className="aboutTitle">About/Skills</h1>
        <div className="container">
        <h2 className="aboutDesc">
        I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, Javascript and mentioned below tech stack...
        </h2>

        <div className="skillsContainer">

          <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target='blank'><img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/></a>

          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='blank'><img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/></a>

          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='blank'><img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/></a>

          <a href="https://react.dev/" target='blank'><img width="45" height="45" src="https://img.icons8.com/officel/80/000000/react.png" alt="react"/></a>

         <a href="https://nodejs.org/docs/latest/api/" target='blank'><img width="60" height="60" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs"/></a>

          <a href="https://expressjs.com/" target='blank'><img width="48" height="48" src="https://img.icons8.com/ios/50/express-js.png" alt="express-js"/></a>

          <a href="https://www.mysql.com/downloads/" target='blank'><img width="60" height="60" src="https://img.icons8.com/color/96/000000/mysql-logo.png" alt="mysql-logo"/></a>

          <a href="https://www.mongodb.com/" target='blank'><img width="48" height="48" src="https://img.icons8.com/color/48/mongodb.png" alt="mongodb"/></a>

          <a href="https://mongoosejs.com/" target='blank'><img width="62" height="62" src="https://img.icons8.com/color/48/mongoose.png" alt="mongoose"/></a>
          
          <a href="https://getbootstrap.com/" target='blank'><img width="48" height="48" src="https://img.icons8.com/color-glass/48/bootstrap.png" alt="bootstrap"/></a>

          <a href="https://tailwindcss.com/" target='blank'><img width="48" height="48" src="https://img.icons8.com/fluency/48/tailwind_css.png" alt="tailwind_css"/></a>

          <a href="https://github.com/Samuvel6826" target='blank'><img width="48" height="48" src="https://img.icons8.com/fluency/48/github.png" alt="github"/></a>

          <a href="https://git-scm.com/" target='blank'><img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git"/></a>

        </div>
        </div>
      </section>
  </>
}

export default About