import {profileAPI, usersAPI} from "../api/api";
import { stopSubmit } from "redux-form";
import { PhotosType, PostsType, ProfileType } from "../types/types.ts"

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";


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
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                ava: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg",
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "try..."
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, 
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state;
    }
}

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText: string
}

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}

export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})
export const deletePost = (postId: number): DeletePostActionType=> ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})    


export const getUserProfile = (userId: number) => async (dispatch: any) =>{
    const response = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
}
export const getStatus = (userId: number) => async(dispatch: any) =>{
    const response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
}
export const updateStatus = (status: string) => async (dispatch: any) =>{
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch(error) {
        //
    }
}

export const savePhoto = (file: any) => async (dispatch: any) =>{
    let response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile);

        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId));
        } else {
            dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
            //return Promise.reject(response.data.messages[0]);
            //dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0] }}));
        }
}


export default profileReducer;