import React from "react";
import Post from "./post/Post";
import c from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


{/*value={props.newPostText} ref={newPostElement}*/
}

const maxLength10 = maxLengthCreator(10)


const PostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name={"newPostText"} placeholder={"type text"}
                           validate={[required, maxLength10]}/>
                </div>
                <button>Add post</button>
            </form>
        </div>
    )
}

const PostReduxForm = reduxForm({form: 'newPostText'})(PostForm);


const MyPosts = React.memo(props => {
    let postsElement = props.posts.map(p => <Post ava={p.ava} message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (formData) => {
        props.addPost(formData.newPostText);
    }

    return (
        <div className={c.myposts}>
            <h3>My Posts</h3>
            <PostReduxForm onSubmit={onAddPost}/>
            <div>
                {postsElement}
            </div>
        </div>
    )
});

export default MyPosts;