import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserContext } from '../../contextapi/usercontext';
import { useNavigate } from 'react-router-dom';
const axios=require('axios');

const UserNavbar = () => {

  const { setAuth } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = async () => {
    // const res = await axios.get(
    //   "http://localhost:5000/api/logout/",
    // );
    // console.log(res.data);
    setAuth(false);
    navigate('/login');
  }

  return (
    

<div className="html">
    <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
            {/* <li><Link to="/">Register</Link></li> */}
                <li><Link to="/viewmedicine">View Medicine</Link></li>
                {/* <li><Link to="/adminlogin">Admin Login</Link></li> */}
                {/* <li><Link to="/adminviewmedicine">Admin Medicines</Link></li> */}
                {/* <li><Link to="/criticalhospitals">Hospitals</Link></li> */}
                <li><IconButton color="primary" aria-label="add to shopping cart">
        <LogoutIcon onClick={logout}/>
      </IconButton></li>
                <li><IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton></li>
                {/* <li><a href="#">Menu</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">Contact</a></li> */}
            </ul>
            <h1 className="logo">Navbar</h1>
        </div>
    </nav>
</div>

  )
}

export default UserNavbar