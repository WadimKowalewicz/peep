import React from "react";
import {
    addMessageActionCreator,
    sendMessageCreator,
    updateNewMessageActionCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
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
        props.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.dispatch(updateNewMessageBodyCreator(body));
    }
    return <Dialogs updateNewMessageBody= {onNewMessageChange}
    sendMessage={onSendMessageClick} dialogsPage={props.store.dialogsPage} />
}

export default DialogsContainer;