const INITIAL_STATE = {value: [], post: {}}

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
    case 'POSTS_VOTE':
        return {...state, post: action.payload}
    case 'POSTS_GET_BY_ID':
        return {...state, post: action.payload}
    case 'POSTS_GET_ALL':
        return {...state, value: action.payload}
    case 'POSTS_GET_ALL_BY_CATEGORY':
        return {...state, value: action.payload}
    case 'POSTS_SAVE':
        return {...state, value: [...state.value, action.payload]}
    case 'POSTS_REMOVE':
        return {...state, value: action.payload}
    case 'POSTS_EDIT':
        return {...state, value: action.payload}
    default:
        return state
    }
}
