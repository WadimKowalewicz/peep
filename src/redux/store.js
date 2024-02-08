import sidebarReducer from "./sidebarReducer.ts";
import profileReducer from "./profileReducer.ts";
import dialogsReducer from "./dialogsReducer.ts";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    ava: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg",
                    message: 'Yo!',
                    likesCount: 555
                },
                {
                    id: 2,
                    ava: "https://sun9-10.userapi.com/s/v1/if2/hxmnMGQpovYRFpGqSEhWrMpMwpHs_NV-WzgNenbL3FiYxerSraaNpPKF3O5FdyXlSENU7tEYTcccKxGkIhGsROT4.jpg?size=200x200&quality=96&crop=2,0,357,357&ava=1",
                    message: 'It\'s my first message!',
                    likesCount: 44
                },
                {
                    id: 3,
                    ava: "https://img.freepik.com/premium-vector/guru-beard-man-indian-face_165162-20.jpg?w=2000",
                    message: 'Apes together strong!',
                    likesCount: 777
                },
                {
                    id: 4,
                    ava: "https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75",
                    message: 'Herzlich willkommen',
                    likesCount: 348
                }
            ],
            newPostText: "try...",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Artur', ava: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"},
                {
                    id: 2,
                    name: 'Denis',
                    ava: "https://sun9-10.userapi.com/s/v1/if2/hxmnMGQpovYRFpGqSEhWrMpMwpHs_NV-WzgNenbL3FiYxerSraaNpPKF3O5FdyXlSENU7tEYTcccKxGkIhGsROT4.jpg?size=200x200&quality=96&crop=2,0,357,357&ava=1"
                },
                {
                    id: 3,
                    name: 'Vadim',
                    ava: "https://img.freepik.com/premium-vector/guru-beard-man-indian-face_165162-20.jpg?w=2000"
                },
                {
                    id: 4,
                    name: 'Vladimir',
                    ava: "https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75"
                }
            ],
            messages: [
                {id: 1, message: 'Yo!'},
                {id: 2, message: 'Nice weather'},
                {id: 3, message: 'How are you?'}
            ],
            newMessageBody: "",
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Artur', ava: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"},
                {
                    id: 2,
                    name: 'Denis',
                    ava: "https://sun9-10.userapi.com/s/v1/if2/hxmnMGQpovYRFpGqSEhWrMpMwpHs_NV-WzgNenbL3FiYxerSraaNpPKF3O5FdyXlSENU7tEYTcccKxGkIhGsROT4.jpg?size=200x200&quality=96&crop=2,0,357,357&ava=1"
                },
                {
                    id: 4,
                    name: 'Vladimir',
                    ava: "https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75"
                }
            ]
        }
    },
    _callSubscriber() {
        console.log("state was changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;