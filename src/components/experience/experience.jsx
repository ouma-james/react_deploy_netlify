import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>what skilss I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'> 
             < BsPatchCheckFill/>
             <div>
              <h4>HTML</h4>
              </div>
             <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
             < BsPatchCheckFill/>
             <div>
              <h4>CSS</h4>
              </div>
             <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
             < BsPatchCheckFill/>
             <div><h4>Javascript</h4></div>
             <small className='text-light'>Intermediate</small>
              </article>
              <article className='experience__details'>
             < BsPatchCheckFill/>
             <div><h4>BOOTSTARP</h4></div>
             <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
             < BsPatchCheckFill/>
             <div><h4>React</h4></div>
             <small className='text-light'>Intermediate</small>
              </article>
            </div>
        </div>
        
        <div className="experience__backend">
        <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'> 
             < BsPatchCheckFill/>
             <div><h4>Node js</h4></div>
             <small className='text-light'>Intermediate</small>
              </article>
              <article className='experience__details'>
             < BsPatchCheckFill/>
             <div><h4>MYSQL</h4></div>
             <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
             < BsPatchCheckFill/>
            <div> <h4>MONGODB</h4></div>
             <small className='text-light'>Intermediate</small>
              </article>
              <article className='experience__details'>
             < BsPatchCheckFill/>
             <div><h4>PHP</h4></div>
             <small className='text-light'>Intermediate</small>
              </article>
              <article className='experience__details'>
             < BsPatchCheckFill/>
             <div><h4>JAVA</h4></div>
             <small className='text-light'>basic</small>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default experience