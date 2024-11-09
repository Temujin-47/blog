import React from 'react'
import './Footer.css'
// import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {

    return (
        <div className='footer dark light'>
            <div className='quick_acess'>
                <strong><span>Quick Access</span></strong>

                <Link to="/">

                    <span> Articles</span>
                </Link>



                {/* <Link to="/basics">
                    <span> Tactics Basics</span>
                </Link> */}




            </div>





            {/* <Link to={!user && '/login'}>
                    <div className='footer_option' onClick={handleAuthentication}>
                        <span className='header_optionOne'>{user ? user.email : "Hello Guest"} </span>
                        <span className='header_optionTwo'>{user ? "Sign Out" : "Sign In"}</span>

                    </div>
                </Link> */}


            <div className='footer_optionBasket'>
                {/* <Link to="/about">
                    <span> About Us</span>
                </Link>
                <br></br> */}
                <Link to='/'>

                    <span> Soccernicus</span>
                </Link>

            </div>


            <div className='quick_acess'>
                <strong><span> Follow Us</span></strong>
                <div>
                    <a className='socials' href="https://www.facebook.com/Soccernicus">

                        <FacebookIcon className='footer_searchIcon' />


                    </a>
                    <a className='socials' href="https://www.facebook.com/Soccernicus">

                        <InstagramIcon className='footer_searchIcon' />


                    </a>
                </div>

            </div>










        </div>

    )
}


//https://scontent-ccu1-1.xx.fbcdn.net/v/t1.6435-9/188262812_107471451532057_5889459112442313789_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xP9p9UuXfbIAX9lB4yo&_nc_ht=scontent-ccu1-1.xx&oh=00_AT_4B4KfiPh6eEjSCieIfGWa-Wf-Ur0I-qlvOgDHKxy7Qg&oe=62FA54DE