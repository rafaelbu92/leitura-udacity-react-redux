import React from 'react'
import ReactDOM from 'react-dom'
import App from 'containers/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import categoryReducer from 'categories/reducer'


const reducers = combineReducers({
    category: categoryReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>
    , document.getElementById('root'))
