import {Link} from 'react-router-dom';
import React from 'react'
import './Signup.css'

import signUpImage from '../Assets/signup.png'
import googleicon from '../Assets/googleicon.png'
import fbicon from '../Assets/fb.png'



export default function Signup() {
  
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
                    </div>
                    <div className="signup-form container" >

                        <div className="name-heading">
                            <label htmlFor="fname">First Name</label>    
                            <label htmlFor="lname">Last Name</label>    
                        </div>    
                        <div className="name-fields">
                            <input type="text" name="fname" id="fname" />
                            <input type="text" name="lname" id="lname" />

                        </div>    
                        <div className="name-heading">
                            <label htmlFor="email">Email</label>    
                            <label htmlFor="phone">Phone no.</label>    
                        </div>   
                        <div className="name-fields">
                            <input type="email" name="email" id="email" />
                            <input className="no-arrow" type="number" name="phone" id="phone" />

                        </div>    
                        <div className="name-heading">
                            <label htmlFor="password">Password</label>    
                            <label htmlFor="cpassword">Confirm Password</label>    
                        </div>   
                        <div className="name-fields">
                            <input type="password" name="password" id="password" />
                            <input type="password" name="cpassword" id="cpassword" />
                        </div>   
                        <div className="boxes">
                            <input type="checkbox" name='checkbox' id='checkbox'/>
                            <label htmlFor="checkbox">&nbsp;&nbsp;I accept all the <span>Terms</span> & <span>Privacy Policy</span></label>
                        </div>  
                        <div className="already-user">
                            <Link to='/login'>Already a user?</Link>
                        </div>
                        <div className="button ">
                            
                            <p>Signup</p>
                        
                        </div> 
                        
                        
                    </div>
                       
                        
                        
                    </div>
                
            </div>
        </div>
  
  )
}


{/* <div className="parent-container">
                            <form action="#" method="post">
                                <div className="name-container">
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" name="fname" id="fname" />
                                    <label htmlFor="lname">Last Name</label>              
                                    <input type="text" name="lname" id="lname" /> 
                                </div>
                                
                                <div className="contact-container">
                                    <label htmlFor="email">Email</label>              
                                    <input type="email" name="email" id="email" /> 
                                    <label htmlFor="phone">Phone no.</label>              
                                    <input className='no-arrow' type="number" id="phone" name="phone"/>
                                </div>  
                            
<div/>*/}