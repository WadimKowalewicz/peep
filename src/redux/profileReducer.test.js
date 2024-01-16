import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

let state =  {
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
    ]
};

test('length of posts should be incremented', () => {
//1. data
    let action = addPostActionCreator("Hi!");
    
//2. action
    let newState = profileReducer(state, action);
// 3. expectation    
    expect(newState.posts.length).toBe(5);
});

test('posts should be "Hi!"', () => {
    //1. data
        let action = addPostActionCreator("Hi!");
        
    //2. action
        let newState = profileReducer(state, action);
    // 3. expectation    
        expect(newState.posts[4].message).toBe("Hi!");
    });

test('after deleting length of messages should be decremented', () => {
    //1. data
        let action = deletePost(1);
        
    //2. action
        let newState = profileReducer(state, action);
    // 3. expectation    
        expect(newState.posts.length).toBe(3);
    });    

test(`after deleting length of messages shouldn't be changed`, () => {
    //1. data
        let action = deletePost(1000);
        
    //2. action
        let newState = profileReducer(state, action);
    // 3. expectation    
        expect(newState.posts.length).toBe(4);
    });        