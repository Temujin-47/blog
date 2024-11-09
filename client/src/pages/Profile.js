import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Profile.css";
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function Profile() {

    const handleclick = (e) => {
        e.currentTarget.classList.remove("dark");
        var activestate = document.querySelectorAll(".light");
        activestate.classList.remove("dark");
    }

    return (
        <div className='profile dark light'>
            <div className='profile_row one'>

                <div className='profile_header__icon'>
                    <AccountCircleIcon className="acc_icon" fontSize='large' />
                </div>



                <div className='profile_header'>
                    <strong><h3 className='profile_header_elements'>Profile</h3></strong>
                    <Link to='/signin'><span className='profile_header_elements'>Sign-In</span></Link>
                </div>
            </div>
            <div className='profile_row one'>
                <Link to="/signup"><span className='settings'>Account</span></Link>
                <span className='settings under'>Settings</span>

            </div>
            {/* <div className='profile_row'>
                <h3>Display Mode</h3>

            </div> */}
            {/* <div className='profile_row'>
                <Box className="box"> Light   <input type="checkbox" className='checkbox'></input></Box>
                <Box className="box"> Dark   <input type="checkbox" onClick={handleclick} className='checkbox'></input></Box>
            </div> */}
        </div>
    )
}

export default Profile