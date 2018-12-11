
const INITIAL_STATE = {value: [], comment: {}}

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
    case 'COMMENTS_EDIT':
        return {...state, value: action.payload}
    case 'COMMENTS_REMOVE':
        return {...state, value: action.payload}
    case 'COMMENTS_SAVE':
        return {...state, value: [...state.value, action.payload]}
    case 'COMMENTS_VOTE':
        const { payload } = action
        if (state.comment.id) {
            return {...state, value: payload.allComments, comment: payload.comment }
        }
        return {...state, value: payload.allComments }
    case 'COMMENTS_GET_ALL':
        console.log({...state, value: action.payload})
        return {...state, value: action.payload}
    case 'COMMENTS_GET_BY_ID':
        return {...state, value: action.payload}
    default:
        return state
    }
}
