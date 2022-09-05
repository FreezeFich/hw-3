import React from 'react'
import { useNavigate } from 'react-router-dom'

import "./SignIn.css"

function SignIn() {
  const navigate = useNavigate();

  const handleCross = () => {
    navigate('/');
  }
  return (
    <div>
              <div id="modalbox-signin" className="modal">
            <div className="modal-content-2">

                <div className="sign-up_head">
                    <div className="title-sign-up">Sign In</div>
                    <div className="title-text-modal">It’s quick and easy.</div>

                </div>
                <div className="reg-box">
                    <div className="modal-email">
                        <input type="text" className="inputemail" name="email" placeholder="Email or Phone" id="email" />
                    </div>
                    <div className="modal-password">
                        <input type="text" className="inputemail" name="password" placeholder="Password" id="password" />
                    </div>
                    <div className="footer-model">
                        <p>People who use our service may have uploaded your contact information to Facebook.
                            <a href="" className ="footer-model-text">
                                Learn more
                            </a>
                            .
                        </p>
                        <p className="">By clicking Sign Up, you agree to our
                            <a href="" className="footer-model-text">Terms</a>
                            ,
                            <a href="" className="footer-model-text">Data Policy</a>
                            and
                            <a href="" className="footer-model-text">Cookies Policy</a>
                            . You may receive SMS
                            Notifications from us and can opt out any time.
                        </p>
                    </div>
                    <div className="sign-up-btn-modal">
                        <button className="modal-btn">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
            <a onClick={handleCross()} className="modal-exit-2">&times;</a>
        </div>
        <div id="modalbox" className="modal">
            <div className="modal-content">

                <div className="sign-up_head">
                    <div className="title-sign-up">Sign Up</div>
                    <div className="title-text-modal">It’s quick and easy.</div>

                </div>
                <div className="reg-box">
                    <div className="fullname">
                        <div className="first-name">
                            <div>
                                <input type="text" className="inputtext" name="firstname" placeholder="First name"
                                    id="firstname" />
                            </div>
                        </div>
                        <div className="second-name">
                            <div>
                                <input type="text" className="inputtext" name="secondname" placeholder="Second name"
                                    id="secondname" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-email">
                        <input type="text" className="inputemail" name="email" placeholder="Email or Phone" id="email" />
                    </div>
                    <div className="modal-password">
                        <input type="text" className="inputemail" name="password" placeholder="Password" id="password" />
                    </div>
                    <div className="gender-modal">
                        <div className="birthday-title">
                            Gender
                        </div>
                        <span className="gender-block">
                            <span className="gender-var">
                                <label htmlFor="male" className="female">Male</label>
                                <input className="radio" type="radio" id="male" name="gender" value="male" />
                            </span>
                            <span className="gender-var-1">
                                <label htmlFor="female" className="female">Female</label>
                                <input className="radio" type="radio" id="female" name="gender" value="female" />
                            </span>
                            <span className="gender-var-2">
                                <label htmlFor="other" className="female">Other</label>
                                <input className="radio" type="radio" id="other" name="gender" value="other" />
                            </span>
                        </span>
                    </div>
                    <div className="footer-model">
                        <p>People who use our service may have uploaded your contact information to Facebook.
                            <a href="" className="footer-model-text">
                                Learn more
                            </a>
                            .
                        </p>
                        <p className="">By clicking Sign Up, you agree to our
                            <a href="" className="footer-model-text">Terms</a>
                            ,
                            <a href="" className="footer-model-text">Data Policy</a>
                            and
                            <a href="" className="footer-model-text">Cookies Policy</a>
                            . You may receive SMS
                            Notifications from us and can opt out any time.
                        </p>
                    </div>
                    <div className="sign-up-btn-modal">
                        <button className="modal-btn">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            <a href='/' className="modal-exit">&times;</a>
        </div>
    </div>
  )
}

export default SignIn