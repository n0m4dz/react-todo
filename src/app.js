import './sass/app'

import React from 'react'
import {render} from 'react-dom'
import {fromJS} from 'immutable'
import {Provider} from 'react-redux'
import configureStore from './redux/store'
import Todo from './Todo'

var todos = {
    fetching: false,
    fetched: false,
    todos: [],
    err: null
}

var initState = {
    todos: fromJS(todos)
}

var store = configureStore(initState)

render(
    <Provider store={store}>
        <Todo />
    </Provider>,
    document.getElementById('root')
)
