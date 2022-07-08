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

    let Dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Vicktor'},
        {id: 5, name: 'Venegred'},
        {id: 6, name: 'Dimych'}
    ]

    let Messages = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Hello'},
    ]

    let DialogsElements = Dialogs.map(d => <DialogItems id={d.id} name={d.name}/>);

    let MessagesElements = Messages.map(m=> <Message message={m.message}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs_Items}>
                    {DialogsElements}
                </div>
                <div className={s.messages}>
                    {MessagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;