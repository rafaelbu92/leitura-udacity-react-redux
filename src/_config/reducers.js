import categoryReducer from 'categories/reducer'
import postReducer from 'posts/reducer'
import { combineReducers } from 'redux'


const reducers = combineReducers({
    categories: categoryReducer,
    posts: postReducer
})

export {reducers}

