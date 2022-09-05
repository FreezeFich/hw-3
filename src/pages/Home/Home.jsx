import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  return (
    <div>
      <header>
        <div class="header">
            <img src="/images/Group 5.png" alt="" class="logo" />

            <div class="header-buttons ">
                <img src="/images/search 1.png" alt="" height="20px" width="20px" />
                <img src="/images/shopping-cart 1.png" height="20px" width="20px" alt="" />
                <a href="#modalbox" class="sign-up">Sign Up</a>
                <a href="#modalbox-signin" class="sign-in">Sign In</a>
            </div>
        </div>
      </header>
      <section class="block-one">
            <div class="block-one-img">
                <img src="/images/pexels-cottonbro-4503751 1.png" alt="" width="100%" />
            </div>
            <div class="block-one-content">
                <h1 class="block-one-title">Kembang Flower Mantap</h1>
                <p class="block-one-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                </p>
                <div class="block-one-buttons">
                    <a href="" class="block-one-button-one">
                        <p>
                            Previous
                        </p>
                        <h1>Kaktus Plant</h1>
                    </a>
                    <a href="" class="block-one-button-two">
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