

const INITIAL_STATE = {value: ['valor default']}

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
    case 'CATEGORIES_GET_ALL':
        return {...state, value: action.payload}
    default:
        return state
    }
}


