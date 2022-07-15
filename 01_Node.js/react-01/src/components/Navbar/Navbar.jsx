import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const ActiveLink = ({isActive}) => isActive ? classes.active : classes.item;
const Item_Active = ({isActive}) => isActive ? classes.item_active : classes.item2;
const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className={ActiveLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className={ActiveLink}>Messages</NavLink>
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
            <div className={classes.friends}>
                <div className={classes.item2}>
                    <NavLink to="/Friends" className={Item_Active}>Friends</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;