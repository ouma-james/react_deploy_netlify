import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit amet nissimos</p>
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit amet n.</p>
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit amet nissi</p>
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit amet nissim</p>
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit amet nis</p>
            
            
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className="service__list">
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit amet </p>
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit amet </p>
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit ametm.</p>
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit ametquam.</p>
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit amet quam.</p>
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit amet nquam.</p>
            
            
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>CONTENT CREATION</h3>
          </div>
          <ul className="service__list">
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit amet nuam.</p>
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit amet uam.</p>
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit amet nam.</p>
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit amet am.</p>
            <li><AiOutlineCheck className='service__list-icon'/></li>
            <p>Lorem ipsum dolor sit amet quam.</p>
            
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services