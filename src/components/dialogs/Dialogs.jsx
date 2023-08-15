import React from "react";
import c from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./dialog/messages/Message";


const Dialogs = (props) => {
    let dialogsElement = props.dialogs.map(d => <Dialog ava={d.ava} name={d.name} id={d.id}/>);
    let messageElement = props.messages.map(m => <Message message={m.message} />);


    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs;