import {Link} from 'react-router-dom';
import React from 'react'
import './Login.css'

import signUpImage from '../Assets/signup.png'
import googleicon from '../Assets/googleicon.png'
import fbicon from '../Assets/fb.png'


export default function Login() {
  return (
    <div>
      <div className="container box my-4">
            <div className="left ">
                <img src={signUpImage} alt="Error!" className='signupimg' />
            </div>
            <div className="right ">
                <div className="headings">
                    <div className="heading1">
                        <h3>Welcome To</h3>
                    </div>
                    <div className="heading2">
                        <h2>Kids Goods Hub</h2>
                    </div>
                </div>
                <div className="btns">
                        <div className="button ">
                            <img src={googleicon} alt="" />
                            <p>Signup with Google</p>
                        
                        </div>
                        <div className="button fb" >
                            <img src={fbicon} alt="" />
                            <p>Signup with Facebook</p>
                        
                        </div>
                        <div className="line">
                            <hr />
                            <p>OR</p>
                            <hr />
                        </div>
                        <div className="input-fields">
                            <div className="email-container">
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' name='email' />
                            </div>
                        
                        
                            <div className="password-container">
                                <label htmlFor="password">Password</label>
                                <input type="password" id='password' name='password' />
                            </div>
                            <div className="forgot-password">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <div className="button" id='loginBtn'>
                                <p>Signup</p>      
                            </div> 
                            <div className="last-line">
                                <p>Don't have an account? <span> <Link to="/signup">Register </Link> </span></p>
                            </div>
                      

                        </div>
 
                    </div>
            </div>
        </div>
    </div>
    
   
  )
}
