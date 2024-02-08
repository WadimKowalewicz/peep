const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [{id: 1, name: 'Artur', ava: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"}, {
        id: 2,
        name: 'Denis',
        ava: "https://sun9-10.userapi.com/s/v1/if2/hxmnMGQpovYRFpGqSEhWrMpMwpHs_NV-WzgNenbL3FiYxerSraaNpPKF3O5FdyXlSENU7tEYTcccKxGkIhGsROT4.jpg?size=200x200&quality=96&crop=2,0,357,357&ava=1"
    }, {
        id: 3,
        name: 'Vadim',
        ava: "https://img.freepik.com/premium-vector/guru-beard-man-indian-face_165162-20.jpg?w=2000"
    }, {
        id: 4, name: 'Vladimir', ava: "https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75"
    }] as Array<DialogType>,
    messages: [{id: 1, message: 'Yo!'}, {id: 2, message: 'Nice weather'}, {id: 3, message: 'How are you?'}] as Array<MessageType>,
};

type DialogType = {
    id: number
    name: string
    ava: string
}

type MessageType = {
    id: number
    message: string
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
            };
        default:
            return state;
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}


export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})
export default dialogsReducer;