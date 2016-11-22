import './sass/app'

import React from 'react'
import {render} from 'react-dom'
import {fromJS} from 'immutable'
import {Provider} from 'react-redux'
import configureStore from './redux/store'
import Todo from './Todo'
import {Router, Route, hashHistory} from 'react-router'

var todos = {
    fetching: false,
    fetched: false,
    todoList: [],
    err: null
}

var posts = []

var initState = {
    todos: fromJS(todos),
    posts:fromJS(posts)
}

var store = configureStore(initState)

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/(:filter)" component={Todo} />
        </Router>
    </Provider>,
    document.getElementById('root')
)
