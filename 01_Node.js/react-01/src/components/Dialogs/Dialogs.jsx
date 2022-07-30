import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItems from "./DialogItem/DialogItem";
import {NavLink} from "react-router-dom";
import classes from "../Navbar/Navbar.module.css";

const ActiveLink = ({isActive}) => isActive ? classes.active : classes.item;

const Dialogs = (props) => {

    let DialogsElements = props.state.DialogsData.map(d => <DialogItems id={d.id} name={d.name}/>);

    let MessagesElements = props.state.MessagesData.map(m => <Message message={m.message}/>)

    return (
        <div>
            <div className={s.dialogs}>

                <div className={s.dialogs_Items}>
                    <NavLink to="/LS" className={ActiveLink}>{DialogsElements}</NavLink>
                </div>
                <div className={s.messages}>
                    <NavLink to="/LS">{MessagesElements}</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;