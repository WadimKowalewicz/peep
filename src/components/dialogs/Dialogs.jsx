import React from "react";
import c from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./dialog/messages/Message";
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    let dialogsElement = props.dialogs.map(d => <Dialog ava={d.ava} name={d.name} id={d.id}/>);
    let messageElement = props.messages.map(m => <Message message={m.message} />);
    let addNewMessage = React.createRef()
    let addMessage = () => {
        alert(addNewMessage.current.value)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                <div className={c.first}>
                    {messageElement}
                </div>
                <div className={c.second}>
                    {messageElement}
                    <div>
                        <textarea ref={addNewMessage}></textarea>
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;