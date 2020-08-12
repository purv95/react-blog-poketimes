const initState = {
    posts: [
        {id:'1', title: 'Squirtle', body: 'abc'},
        {id:'2', title: 'Bulba', body: 'abc'},
        {id:'3', title: 'Pika', body: 'abc'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(posts => {
            return action.id !== posts.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer