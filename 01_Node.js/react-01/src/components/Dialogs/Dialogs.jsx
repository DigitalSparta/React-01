import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItems from "./DialogItem/DialogItem";



const Dialogs = (props) => {

    let DialogsElements = props.state.DialogsData.map(d => <DialogItems id={d.id} name={d.name}/>);

    let MessagesElements = props.state.MessagesData.map(m => <Message message={m.message}/>)

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