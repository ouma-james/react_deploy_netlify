import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import  { useState } from 'react'
import emailjs from 'emailjs-com'

function contact() {
  const form = useState()
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_gfyunnn', 'template_tt6d5gc', form.current, 'YT1QdxqOvT7CfskLeM')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>oumajames92@gmail.com</h5>
            <a href="mailto:oumajames92@gmail.com" target='_blank'>send a message</a>
          </article>
          <article className="contact__option">
            <BsFacebook className='contact__option-icon' />
            <h4>messanger</h4>
            <h5>james</h5>
            <a href="https://m.me/jamie.kalu" target='_blank'>send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>whatsapp</h4>
            <h5>+254718027354</h5>
            <a href="https://api.whatsapp.com/send?phone=+254718027354" target='_blank'>send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your email ' required />
          <textarea name="message" rows="7" placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default contact