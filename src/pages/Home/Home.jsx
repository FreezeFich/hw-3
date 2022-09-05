import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


import "./Home.css"


function Home() {

  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/signin');
  }
  const handleAbout = () => {
    navigate('/about');
  }
  return (
    <div>
      <header>
        <div className="header">
            <img src="https://github.com/FreezeFich/css-cw-1/blob/main/images/Group%205.png?raw=true" alt="" className="logo" />

            <div className="header-buttons ">
                <img src="https://cdn-icons-png.flaticon.com/512/4024/4024513.png" alt="" height="30px" width="30px" />
                <img src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" height="30px" width="30px" alt="" />
                <a href="/signin" className="sign-up">Sign Up</a>
                <a href='/signin'className="sign-in">Sign In</a>
            </div>
        </div>
      </header>
      <section className="block-one">
            <div className="block-one-img">
                <img src="https://github.com/FreezeFich/css-cw-1/blob/main/images/pexels-cottonbro-4503751%201.png?raw=true" alt="" width="100%" />
            </div>
            <div className="block-one-content">
                <h1 className="block-one-title">Kembang Flower Mantap</h1>
                <p className="block-one-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,        <a className='about'>About</a>
                </p>

                <div className="block-one-buttons">
                    <a href="" className="block-one-button-one">
                        <p>
                            Previous
                        </p>
                        <h1>Kaktus Plant</h1>
                    </a>
                    <a href="" className="block-one-button-two">
                        <p>Next</p>
                        <h1>Rahasia Plant</h1>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home