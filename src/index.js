import React from 'react'
import ReactDOM from 'react-dom'
import App from 'containers/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import categoryReducer from 'categories/reducer'
import thunk from 'redux-thunk'


const reducers = combineReducers({
    category: categoryReducer
})


ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <App/>
    </Provider>
    , document.getElementById('root'))
