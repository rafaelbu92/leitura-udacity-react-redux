import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'

import {reducers} from './reducers'
import {history} from './history'

import { Map } from 'immutable'

const initialState = Map({})
const enhancers = []
const middleware = [
    routerMiddleware(history),
    thunk
]

const store = createStore(
    connectRouter(history)(reducers),
    initialState,
    compose(
        applyMiddleware(
            ...middleware,
            ...enhancers
        ),
    ),
)


export {store}
