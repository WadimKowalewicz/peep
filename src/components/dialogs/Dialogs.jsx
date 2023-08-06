import React from "react";
import c from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./dialog/messages/Message";

const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <Dialog name='Artur' id='1'/>
                <Dialog name='Denis' id='2'/>
                <Dialog name='Vadim' id='3'/>
                <Dialog name='Vladimir' id='4'/>
            </div>
            <div className={c.messages}>
                <Message message='Yo!' />
                <Message message='Nice weather' />
                <Message message='How are you?' />
            </div>
        </div>
    )
}

export default Dialogs;