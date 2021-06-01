import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
    postsData: [
        {id: 1, message: 'Hi, how are you ?', like: 15},
        {id: 2, message: 'It\'s my first post', like: 18},
        {id: 3, message: 'BlaBlaBla', like: 24}
    ],
}

it ("posts' length should be incremented", () => {
    // 1. test data
    let action = addPost('test')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postsData.length).toBe(4);
})

it ("posts' should be added", () => {
    // 1. test data
    let action = addPost('test')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postsData[3].message).toBe("test");
})

it ("posts' length should be decrement", () => {
    // 1. test data
    let action = deletePost(1000)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postsData.length).toBe(3);
})