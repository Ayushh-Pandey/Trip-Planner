import { useContext } from "react";
import "./navbar.css"
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import { Typography } from "@mui/material";

const Navbar = () => {
  const { user} = useContext(AuthContext);
  
  const navigate = useNavigate();

  const handleClick = async(e)=>{
    e.preventDefault();
    navigate("/login");
  }

  const handleRegister = (e)=>{
    e.preventDefault();
    navigate("/login");
  }
  
  const handleLogout = (e)=>{
    e.preventDefault();
    navigate('/login')
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:'inherit', textDecoration:'none'}}>
          <span className="logo">Trip Planner</span>
        </Link>
        {user? 
        <div className="navItems">
          <span className="logo">{user.username}</span>
          <button className="navButton" onClick={handleLogout}>Logout</button>
        </div>
        :
        <div className="navItems">
          <button className="navButton" onClick={handleRegister}>Register</button>
          <button className="navButton" onClick={handleClick}>Login</button>
          <button className="navButton" onClick={handleLogout}>Logout</button>
        </div>}
        {/* <div className="navItems">
          <button className="navButton" onClick={handleLogout}>Logout</button>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar