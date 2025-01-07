import React, { useEffect, useState } from 'react'
import './projects.css'
import Cards from '../cards-Dir/Cards'
import axios from 'axios';

function Projects() {

  const [mentors,setMentors] = useState([])
  
  let getMentors = async ()=> {
    try {
      let res = await axios.get(`${'https://b46wet-capstone-portfolio-backend.onrender.com/users'}`)
      // console.log(res.data.data)
      setMentors(res.data.data)
  
    } catch (error) {
      console.log(error)
    }
  }
  useEffect (()=>{
    getMentors()
  },[])

  return <>
  <section id="projects">
    <h2 className="projectsTitle">My Projects</h2>
    {/* <span className="projectsDesc">
    I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.
    </span> */}
    <div className="myProjects">
    {
                  mentors.map((e,i)=>{
                    return <Cards key={i}
                    id={e.id}
                    imgUrl={e.imgUrl}
                    name={e.name}
                    description={e.description}
                    siteLink={e.siteLink}
                    />
                  })
                }
    </div>
  {/* <button className="seeBtn">See More</button> */}
  </section>
  </>
}

export default Projects