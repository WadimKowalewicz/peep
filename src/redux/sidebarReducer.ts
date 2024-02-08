type FriendsType = {
    id: number
    name: string
    ava: string
}

let initialState = {
    friends: [
        {id: 1, 
            name: 'Artur',
            ava: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
        },
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
    ] as Array<FriendsType>
};

export type InitialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: any):  InitialStateType => {
    return state;
}

export default sidebarReducer;