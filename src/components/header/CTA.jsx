import React from 'react'
import cv from '../../assets/cv.pdf'

function CTA() {
    return ( 
        <div className='cta'>
            <a href={cv} download className='btn'>Download cv</a>
            <a href="#contact" className='btn btn-primary'>Lets talk</a>
        </div>
    )
}

export default CTA