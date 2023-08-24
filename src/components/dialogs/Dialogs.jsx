import React from "react";
import c from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./dialog/messages/Message";
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    console.log(props);
    let dialogsElement = props.dialogs.map(d => <Dialog ava={d.ava} name={d.name} id={d.id}/>);
    let messageElement = props.messages.map(m => <Message message={m.message} />);

    let newMessageElement = React.createRef()
    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let newText = newMessageElement.current.value
        props.updateNewMessageText(newText);
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
                        <textarea onChange={ onMessageChange } value={props.newMessageText} ref={newMessageElement}></textarea>
                        <button onClick={ addMessage }>Send message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;