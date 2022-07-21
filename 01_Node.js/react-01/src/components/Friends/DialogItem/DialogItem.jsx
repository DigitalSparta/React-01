import React from 'react';
import s from './../friends.module.css';
import {NavLink} from "react-router-dom";

const activeee = ({isActive}) => isActive ? s.navdialogs : s.navdialogs_Items;


const NavDialogItems = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={props.id} className={activeee}>{props.name}</NavLink>
        </div>
    )
}

export default NavDialogItems;

