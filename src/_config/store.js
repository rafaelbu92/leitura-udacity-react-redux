import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'

import {reducers} from './reducers'


const middleware = [
    thunk
]

const store = createStore(
    reducers,
    compose(
        applyMiddleware(
            ...middleware
        ),
    ),
)


export {store}
