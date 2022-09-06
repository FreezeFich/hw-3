import React from 'react'
import block from "../../component/aboutBlock/aboutBlock"
import "./About.css"

function About() {
  return (
    <div className='block-two'>
       <div className="block-two-block">
                <div className="block-two-block-title">
                    <img src="/images/fast 1.png" alt="" height="48px" />
                    <h1>Fast Delivery</h1>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard</p>
            </div>
            <div className="block-two-block">
                <div className="block-two-block-title-second">
                    <img src="/images/Vector.png" alt="" height="48px" />
                    <h1>Great Customer Service</h1>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard</p>
            </div>
            <div className="block-two-block">
                <div className="block-two-block-title">
                    <img src="/images/plant 1.png" alt="" height="48px" />
                    <h1>Original Plants</h1>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard</p>
            </div>
            <div className="block-two-block">
                <div className="block-two-block-title">
                    <img src="/images/dollar-symbol 1.png" alt="" height="48px" />
                    <h1>Affordable Price</h1>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard</p>
            </div>
    </div>
  )
}

export default About