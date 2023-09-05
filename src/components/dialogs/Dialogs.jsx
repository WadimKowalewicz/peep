import React from "react";
import c from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./dialog/messages/Message";
import {
    addMessageActionCreator,
    sendMessageCreator,
    updateNewMessageActionCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogsReducer";




const Dialogs = (props) => {

    //let state = props.dialogsPage;

    let dialogsElement = props.dialogsPage.dialogs.map(d => <Dialog ava={d.ava} name={d.name} id={d.id}/>);
    let messageElement = props.dialogsPage.messages.map(m => <Message message={m.message} />);
    let newMessageBody = props.dialogsPage.newMessageBody;
    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let newText = newMessageElement.current.value
        let action = updateNewMessageActionCreator(newText);
        props.dispatch(action);
    }

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                <div className={c.first}>
                    <div>{messageElement}</div>
                <div>
                    <textarea onChange={ onNewMessageChange }
                              placeholder="Enter your message"
                              value={newMessageBody}
                              ref={newMessageElement}>
                    </textarea>
                    <button onClick={ onSendMessageClick }>Send message</button>
                </div>
                </div>
                <div className={c.second}>
                    <div>{messageElement}</div>
                    <div>
                        <textarea onChange={ onMessageChange }
                                  value={props.dialogsPage.newMessageText}
                                  ref={newMessageElement}>
                        </textarea>
                        <button onClick={ addMessage }>Send message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;