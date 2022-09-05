import React from 'react'
import aboutBlock from '../../component/aboutBlock/aboutBlock'

function About() {
  return (
    <div className='block-two'>
        <aboutBlock 
          source="https://github.com/FreezeFich/css-cw-1/blob/main/images/fast%201.png?raw=true"
          title="Fast Delivery"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
        />
        <aboutBlock 
          source="https://github.com/FreezeFich/css-cw-1/blob/main/images/Vector.png?raw=true"
          title="Great Customer Service"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
        />
        <aboutBlock 
          source=""
          title="Original Plants"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
        />
        <aboutBlock 
          source="https://github.com/FreezeFich/css-cw-1/blob/main/images/dollar-symbol%201.png?raw=true"
          title="Affordable Price"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
        />
    </div>
  )
}

export default About