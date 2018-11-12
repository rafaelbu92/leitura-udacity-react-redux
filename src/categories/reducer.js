

const INITIAL_STATE = ['valor default']

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
    case 'CATEGORIES_GET_ALL':
        return {...state, category: action.payload}
    default:
        return state
    }
}


