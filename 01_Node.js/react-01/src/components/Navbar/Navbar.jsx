import React from 'react'; 
import classes from './Navbar.module.css';
import {Link, NavLink} from "react-router-dom";

const ActiveLink = ({isActive}) => isActive ? classes.active : classes.item ;
const Navbar = () => {
  return <nav className={classes.nav}>
  <div className={classes.item}>
    <NavLink to ='/profile' className = {ActiveLink}>Profile</NavLink>
  </div>
  <div className={classes.item}>
    <Link to='/dialogs'>Massages</Link>
  </div>
  <div className={classes.item}>
    <a href='/news'>News</a>
  </div>
  <div className={classes.item}>
    <a href='/music'>Music</a>
  </div>
  <div className={classes.item}>
    <a href='/settings'>Settings</a>
  </div>
</nav>
}

export default Navbar;