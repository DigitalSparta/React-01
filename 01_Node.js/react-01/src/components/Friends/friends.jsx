import React from 'react'
import NavDialogItems from "./DialogItem/DialogItem";
import s from "./friends.module.css";

const Friends = (props) => {

    let NavDialogsElements = props.state.DialogsData.map(d => <NavDialogItems id={d.id} name={d.name}/>);

    return (
        <div className={s.navdialogs}>
            <div className={s.navdialogs_Items}>
                <h2>friends</h2>
                {NavDialogsElements}
            </div>
        </div>
    );
}

export default Friends;