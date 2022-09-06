import React from 'react'
import "./About.css"
import { Link, useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate();

  const handleSigninButton = () => {
    navigate('/signin');
  }
  const handleAboutHref = () => {
    navigate('/about');
  }
  const handleHomeButton = () => {
    navigate("/home")
  }

    return (
    <>
          <header>
        <div className="header">
            <img onClick={handleHomeButton} src="https://github.com/FreezeFich/css-cw-1/blob/main/images/Group%205.png?raw=true" alt="" className="logo" />

            <div className="header-buttons ">
                <img src="https://cdn-icons-png.flaticon.com/512/4024/4024513.png" alt="" height="30px" width="30px" />
                <img src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" height="30px" width="30px" alt="" />
                <a onClick={handleAboutHref}  className="sign-up">About</a>
                <a onClick={handleSigninButton}  className="sign-up">Sign Up</a>
                <a onClick={handleSigninButton}  className="sign-in">Sign In</a>
            </div>
        </div>
      </header>
    <div className='block-two'>
       <div className="block-two-block">
                <div className="block-two-block-title">
                    <img src="https://github.com/FreezeFich/css-cw-1/blob/main/images/fast%201.png?raw=true" alt="" height="48px" />
                    <h1>Fast Delivery</h1>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard</p>
            </div>
            <div className="block-two-block">
                <div className="block-two-block-title-second">
                    <img src="https://github.com/FreezeFich/css-cw-1/blob/main/images/Vector.png?raw=true" alt="" height="48px" />
                    <h1>Great Customer Service</h1>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard</p>
            </div>
            <div className="block-two-block">
                <div className="block-two-block-title">
                    <img src="https://github.com/FreezeFich/css-cw-1/blob/main/images/plant%201.png?raw=true" alt="" height="48px" />
                    <h1>Original Plants</h1>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard</p>
            </div>
            <div className="block-two-block">
                <div className="block-two-block-title">
                    <img src="https://github.com/FreezeFich/css-cw-1/blob/main/images/dollar-symbol%201.png?raw=true" alt="" height="48px" />
                    <h1>Affordable Price</h1>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard</p>
            </div>
    </div>
    <article className="block-four">
            <div className="block-four-content">
                <h1>Buy more plants, it helps you to be relaxed</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam. Pellentesque
                    et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim. Maecenas vitae
                    eros sapien. Quisque pellentesque tempus dignissim.</p>
                <img src="/images/block-4 content img.png" alt="" />
            </div>
            <div className="block-four-img">
                <img src="/images/block-4 img.png" alt="" width="100%" height="100%" />
            </div>
        </article>
    </>
  )
}

export default About