import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo2.jpg";
import "./css/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {
 const [open,setOpen]=useState(false)
const set=()=>{
  setOpen(!open);
}
  return (
    <div className='Navbar'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <ul className={`items ${open ? 'open':''}`}>
        <li><Link className='link' to="/" onClick={()=>setOpen(false)}>Home</Link></li>
        <li><Link className='link' to="/products" onClick={()=>setOpen(false)}>Products</Link></li>
        <li><Link className='link' to="/about" onClick={()=>setOpen(false)}>About</Link></li>
        <li><Link className='link' to="/contact" onClick={()=>setOpen(false)}>Contact</Link></li>
      </ul>
      <ul className='Icons'>
        <li className='rel'>
          <Link className='linkcart' to="/cart"><LocalMallOutlinedIcon className='m' /></Link>
          <span>0</span>
        </li>
        <li className='rel'>
          <Link className='linkfav' to="/favourites"><FavoriteBorderOutlinedIcon className='m' /></Link>
        </li>
        <li className='rel'>
          <Link className='linkprofile' to="/profile"><AccountCircleOutlinedIcon className='m' /></Link>
        </li>
        <li className='rel linkham'onClick={set}>
        {open ?<CloseIcon className='m'/>:<MenuIcon className='m'/>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
