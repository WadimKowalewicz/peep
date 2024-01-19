import React from "react";
import c from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./dialog/messages/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/formsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength20 = maxLengthCreator(20);

const MessageForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} name={"newMessageBody"} placeholder={"Enter your message"}
                       validate={[required, maxLength20]}/>
                <button>Send message</button>
            </form>
        </div>
    )
}

const MessageReduxForm = reduxForm({form: 'dialogAddMessage'})(MessageForm);

const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map(d => <Dialog key={d.id} ava={d.ava} name={d.name} id={d.id}/>);
    let messageElement = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>);
   /* let newMessageBody = props.dialogsPage.newMessageBody;
    let newMessageElement = React.createRef()
    }*/

    if (!props.isAuth) return <Redirect to={'/login'}/>

    const addNewMessage = (formData) => {
        console.log(formData);
        props.sendMessage(formData.newMessageBody);
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
                        <MessageReduxForm onSubmit={addNewMessage}/>
                    </div>
                </div>
                <div className={c.second}>
                    <div>{messageElement}</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;