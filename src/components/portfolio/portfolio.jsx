import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'


const data =[
  {
    id:1,
    image:IMG1,
    title:'Digital marketing agency website design',
    github:'https://github.com',
    demo:'https://dribble.com'
  },
  {
    id:2,
    image:IMG2,
    title:'Digital marketing agency website design',
    github:'https://github.com',
    demo:'https://dribble.com'
  },
  {
    id:3,
    image:IMG3,
    title:'Animation for the Mental Health Website',
    github:'https://github.com',
    demo:'https://dribble.com'
  },

  {
    id:4,
    image:IMG4,
    title:'Creative Proposal Powerpoint Template',
    github:'https://github.com',
    demo:'https://dribble.com'
  },

  {
    id:5,
    image:IMG5,
    title:'Gadget Marketplace Platform',
    github:'https://github.com',
    demo:'https://dribble.com'
  },



]

const portfolio = () => {
  return (
    <section>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo})=>{
          return(
            <article key={id}className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
            
         
        </article>
          )
        })
      }
        
      </div>
    </section>
  )
}

export default portfolio