import React from 'react';
import "./SignUp.css";
import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';


function SignUp() {
    return (
        <div className='signUp dark light'>
            <div className='signUp__header sections'>
                <h3> Create Your Account</h3>
                <p> Use one of the applications to Sign-Up for Soccernicus</p>
            </div>
            <div className='signup__socials sections'>
                <Box className='social__box'><FacebookIcon className='social__icon' /> Continue With Facebook</Box>
                <Box className='social__box'><GoogleIcon className='social__icon' /> Continue with Google</Box>
            </div>
            <div className='sections'>
                <hr
                    style={{
                        color: 'grey',
                        borderColor: 'grey',
                        width: '80 %',
                        margin: '20px 0',

                    }}
                />
            </div>
            <div className='signUp__email sections'>
                <span className='email__span'>Your Email</span>
                <input type='email' className='email__box' />
                <span className='email__span'>Please Provide a Valid Email Address.</span>
                <span className='email__span'>Your Password</span>
                <input type='password' className='email__box' />
                <span className='email__span'>Your Password must contain 8 charecters, 1 capital letter and 1 number.</span>
                <div className='email__span'><input type='checkbox' /> <span className='email__span'>Show Password</span></div>
                <div>
                    <hr
                        style={{
                            color: 'grey',
                            borderColor: 'grey',
                            margin: "20px 0"
                        }}
                    />
                </div>
                <div className='email__span'><input type='checkbox' /> <span className='email__span'>I accept the Terms and Conditions and I have read the Privacy Policy.</span></div>
                <div className='email__span'><input type='checkbox' /> <span className='email__span'>I want to be kept up to date with Soccernicus news, products and promotions.</span></div>
                <button className='sections signup__button'> Create Your Account</button>
                <span className='sections'>Already have an account? <Link to='/signin'>Sign In</Link></span>




            </div>
        </div>
    )
}

export default SignUp