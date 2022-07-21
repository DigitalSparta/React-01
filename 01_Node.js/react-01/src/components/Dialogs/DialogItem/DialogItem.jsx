import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const activee = ({isActive}) => isActive ? s.dialogs : s.dialogs_Items;


const DialogItems = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/message/' + props.id} className={activee}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItems;

