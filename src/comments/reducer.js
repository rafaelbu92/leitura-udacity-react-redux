
const INITIAL_STATE = {value: []}

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
    case 'COMMENTS_EDIT':
        return {...state, value: action.payload}
    case 'COMMENTS_REMOVE':
        return {...state, value: action.payload}
    case 'COMMENTS_SAVE':
        return {...state, value: [...state.value, action.payload]}
    case 'COMMENTS_VOTE':
        return {...state, value: action.payload}
    case 'COMMENTS_GET_ALL':
        return {...state, value: action.payload}
    case 'COMMENTS_GET_BY_ID':
        return {...state, value: action.payload}
    default:
        return state
    }
}
