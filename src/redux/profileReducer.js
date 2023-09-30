import {usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState =  {
    posts: [
        {
            id: 1,
            ava: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg",
            message: 'Yo!',
            likesCount: 25
        },
        {
            id: 2,
            ava: "https://sun9-10.userapi.com/s/v1/if2/hxmnMGQpovYRFpGqSEhWrMpMwpHs_NV-WzgNenbL3FiYxerSraaNpPKF3O5FdyXlSENU7tEYTcccKxGkIhGsROT4.jpg?size=200x200&quality=96&crop=2,0,357,357&ava=1",
            message: 'It\'s my first message!',
            likesCount: 2
        },
        {
            id: 3,
            ava: "https://img.freepik.com/premium-vector/guru-beard-man-indian-face_165162-20.jpg?w=2000",
            message: 'Apes together strong!',
            likesCount: 67
        },
        {
            id: 4,
            ava: "https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75",
            message: 'Herzlich willkommen',
            likesCount: 34
        }
    ],
    newPostText: "try...",
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                ava: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg",
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "try..."
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText) =>
    ({type: UPDATE_NEW_POST_TEXT, text: newText});
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) =>{
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export default profileReducer;