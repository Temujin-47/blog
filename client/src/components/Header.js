import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Header() {


    return (
        <div className='header dark light'>
            <div className='header_title'>
                <Link to='/'>
                    <img className='header_logo'
                        src="https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/308344425_397310355900337_3331707703232215152_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=uPy_bU_3Q8YQ7kNvgHexNgD&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AEagqQECmgk56WpNXyq7FwJ&oh=00_AYDdvVbNO2PnIbUJxZWwJO5rpA_eAxNseVYWMpKqJq_5zA&oe=6733B8F0" />

                </Link>


            </div>



            <div className='header_title'>
                <Link to="/">
                    <div className='header_title'>
                        <strong><span className='header_optionLineTwo header_basketCount'>SOCCERNICUS</span></strong>
                    </div>
                </Link>
            </div>

            <div className='header_nav'>
                {/* <Link to={!user && '/login'}>
                    <div className='header_option' onClick={handleAuthentication}>
                        <span className='header_optionOne'>{user ? user.email : "Hello Guest"} </span>
                        <span className='header_optionTwo'>{user ? "Sign Out" : "Sign In"}</span>

                    </div>
                </Link> */}


                <Link to="/search">
                    <div className='header_search'>
                        <SearchIcon className='header_searchIcon' />

                    </div>
                </Link>

                {/* <div>
                    <Link to="/articles">
                        <div className='header_option'>
                            <span className='header_optionOne'>Artickes</span>
                            <span className='header_optionTwo'>&Analysis </span>

                        </div>
                    </Link>
                </div>

                <Link to="/about">
                    <div className='header_optionBasket'>
                        <span className='header_optionLineTwo header_basketCount'>About Us</span>
                    </div>
                </Link> */}

                <Link to="/profile">
                    <div className='header_optionBasket'>
                        <PersonOutlineIcon fontSize='large'></PersonOutlineIcon>
                    </div>
                </Link>


            </div>






        </div>
    )
}


//https://scontent-ccu1-1.xx.fbcdn.net/v/t1.6435-9/188262812_107471451532057_5889459112442313789_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xP9p9UuXfbIAX9lB4yo&_nc_ht=scontent-ccu1-1.xx&oh=00_AT_4B4KfiPh6eEjSCieIfGWa-Wf-Ur0I-qlvOgDHKxy7Qg&oe=62FA54DE