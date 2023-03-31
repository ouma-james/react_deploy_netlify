import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FcOpenedFolder} from 'react-icons/fc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
             <img src={ME} alt="about" />
          </div>
        </div>
          <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
               <FaAward className='about__icon'/>
              <h5>experience</h5>
              <small>1+ years working</small>
            </article>
            <article className='about__card'>
               <FiUsers className='about__icon'/>
              <h5>clients</h5>
              <small>10+ clients</small>
            </article>
            <article className='about__card'>
               <FcOpenedFolder className='about__icon'/>
              <h5>projects</h5>
              <small>20+ completed projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aliquid quidem debitis voluptate! Libero pariatur est assumenda excepturi, laudantium sed minima laborum molestias incidunt aliquid consectetur ipsa in, rem perferendis.

          </p>
          <a href="#contact" className='btn btn-primary'>Lets talk</a>
         
        </div>
      </div>
    </section>
  )
}

export default About