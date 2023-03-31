import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'




const data =[
  {
    avatar:AVT1,
    name:'Tina',
    review:'lorem Lorem ipsum dolor, sit amet consectetur adipisicing e Lorem ipsum dolor sit a '
  },
  {
    avatar:AVT2,
    name:'Burna',
    review:'lorem Lorem ipsum dolor, sit amet consectetur adipisicing e Lorem ipsum dolor sit a '
  },
  {
    avatar:AVT3,
    name:'Tiwa',
    review:'lorem Lorem ipsum dolor, sit amet consectetur adipisicing e Lorem ipsum dolor sit a '
  },
  {
    avatar:AVT4,
    name:'savage',
    review:'lorem Lorem ipsum dolor, sit amet consectetur adipisicing e Lorem ipsum dolor sit a '
  },
]
const testimonials = () => {
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <div key={index}className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="" />
            
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </div>
            )
          })
        }
        
        
      </div>
    </section>
  )
}

export default testimonials