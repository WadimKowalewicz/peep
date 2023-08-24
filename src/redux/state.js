import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, ava: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg", message: 'Yo!', likesCount: 25},
            {id: 2, ava: "https://sun9-10.userapi.com/s/v1/if2/hxmnMGQpovYRFpGqSEhWrMpMwpHs_NV-WzgNenbL3FiYxerSraaNpPKF3O5FdyXlSENU7tEYTcccKxGkIhGsROT4.jpg?size=200x200&quality=96&crop=2,0,357,357&ava=1", message: 'It\'s my first message!', likesCount: 2},
            {id: 3, ava: "https://img.freepik.com/premium-vector/guru-beard-man-indian-face_165162-20.jpg?w=2000", message: 'Apes together strong!', likesCount: 67},
            {id: 4, ava: "https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75", message: 'Herzlich willkommen', likesCount: 34}
        ],
        newPostText: "try...",
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Artur', ava: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"},
            {id: 2, name: 'Denis', ava: "https://sun9-10.userapi.com/s/v1/if2/hxmnMGQpovYRFpGqSEhWrMpMwpHs_NV-WzgNenbL3FiYxerSraaNpPKF3O5FdyXlSENU7tEYTcccKxGkIhGsROT4.jpg?size=200x200&quality=96&crop=2,0,357,357&ava=1"},
            {id: 3, name: 'Vadim', ava: "https://img.freepik.com/premium-vector/guru-beard-man-indian-face_165162-20.jpg?w=2000"},
            {id: 4, name: 'Vladimir', ava: "https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75"}
        ],
        messages:[
            {id: 1, message: 'Yo!'},
            {id: 2, message: 'Nice weather'},
            {id: 3, message: 'How are you?'}
        ],
        newMessageText: "Your turn..",
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Artur', ava: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"},
            {id: 2, name: 'Denis', ava: "https://sun9-10.userapi.com/s/v1/if2/hxmnMGQpovYRFpGqSEhWrMpMwpHs_NV-WzgNenbL3FiYxerSraaNpPKF3O5FdyXlSENU7tEYTcccKxGkIhGsROT4.jpg?size=200x200&quality=96&crop=2,0,357,357&ava=1"},
            {id: 4, name: 'Vladimir', ava: "https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75"}
        ]
    }
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export let addPost = () => {

    let newPost = {
        id: 5,
        ava: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg",
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "try...";
    renderEntireTree(state);
}


export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    renderEntireTree(state);
}

export let addMessage = () => {

    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = "Your turn..";
    renderEntireTree(state);
}


export default state;