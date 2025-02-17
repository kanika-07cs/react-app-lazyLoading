import React from 'react'
import logo from "../assets/abk-circle-concept-logo.webp"
import {useNavigate,useNavigation} from 'react-router-dom'
import "../styles/navbar.css"

export default function Navlinks() {
    const navigate=useNavigate();
  return (
    <div className='navbar-container'>
        <img src={logo} alt="logo" width={"200px"}></img>
    <div className='navlinks'>
      <ul>
        <li onClick={()=>navigate('/')}>HOME</li>
        <li onClick={()=>navigate('/about')}>ABOUT</li>
        <li onClick={()=>navigate('/icecream')}>ICECREAM</li>
        <li onClick={()=>navigate('/blog')}>BLOG</li>
        <li onClick={()=>navigate('/service')}>SERVICE</li>
        
      </ul>
    </div>
    </div>
  )
}