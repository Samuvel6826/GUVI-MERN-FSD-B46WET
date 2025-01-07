import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll'
import menu from '../../assets/menu.png'
import { jsPDF } from "jspdf";

function Navbar() {
  const [showMenu,setShowMenu] = useState(false)

  const generatePdfPrompt = () => {
  if (confirm("After accepted wait for a minute for the file to download") == true) {
    generatePdf()
  } 
}

  const generatePdf = () => {
    const doc = new jsPDF({
      orientation: 'l',
      unit: 'pt',
      format: 'a4',
      compress: "true",
      putOnlyUsedFonts:true
     });
    doc.html(document.body).save("Portfolio.pdf");
  };

  return <>
    <nav className="navbar">
        <img src={Logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Contact</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}}>
            <img src={contactImg} alt="Contact Image" className="desktopMenuImg" />Contact Me
        </button>

        <div>
          <button onClick={generatePdfPrompt} className="desktopMenuBtn">Export to PDF</button>
        </div>

        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display : showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  </>
}

export default Navbar