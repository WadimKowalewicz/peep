import React from "react";
import { Textarea, Input, createField } from "../../common/formsControls/FormsControls";
import { reduxForm } from "redux-form";
import s from './ProfileInfo.module.css'
import c from '../../common/formsControls/FormsControls.module.css'


const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={c.formSummaryError}>
            {error}</div>}
        <div>
            <b>Full Name: </b> {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job: </b> {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>
        <div>
            <b>My professional skills: </b> {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
            <b>About me: </b> {createField("About me..", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: </b> {createField(key, "contacts." + key, [], Input)}
                </div>
            })}
        </div>
    </form>
}


const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;