const INITIAL_STATE = {value: ['valor default']}

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
    case 'POSTS_GET_ALL':
        return {...state, value: action.payload}
    case 'POSTS_GET_ALL_BY_CATEGORY':
        console.log('reducer', action)
        return {...state, value: action.payload}
    default:
        return state
    }
}
