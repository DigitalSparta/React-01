import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const activee = ({isActive}) => isActive ? s.dialogs : s.dialogs_Items;

const DialogItems = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialog/' + props.id} className={activee}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}



const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs_Items}>

                    <DialogItems name="Dimych" id="1"/>
                    <DialogItems name="Andrey" id="2"/>
                    <DialogItems name="Sasha" id="3"/>
                    <DialogItems name="Vicktor" id="4"/>
                    <DialogItems name="Venegred" id="5"/>
                    <DialogItems name="Dimych" id="6"/>
                </div>
                <div className={s.messages}>
                    <Message message="hi"/>
                    <Message message="How are you"/>
                    <Message message="Hello"/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;