import './sass/app'

import React from 'react'
import {render} from 'react-dom'
import {fromJS} from 'immutable'
import {Provider} from 'react-redux'
import configureStore from './redux/store'
import Layout from './Layout'
import Todo from './Todo'
import Home from './Home/components'
import User from './User/components'

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
            <Route path="/" component={Layout}>
                <Route path='home' component={Home}/>
                <Route path='todo' component={Todo}/>
                <Route path='users' component={User}>
                    <Route path='todo' components={Todo}/>
                    <Route path='home' components={Home}/>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
