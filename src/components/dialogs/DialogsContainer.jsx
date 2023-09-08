import React from "react";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
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