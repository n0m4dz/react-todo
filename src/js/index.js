import '../sass/app'

import React from 'react'
import {render} from 'react-dom'
import {fromJS} from 'immutable'
import {Provider} from 'react-redux'
import configureStore from './store'
import Layout from './Layout'
import Todo from './Todo'
import Home from './Home/components'
import User from './User/components'

import {Router, Route, hashHistory} from 'react-router'

const todos = {
    fetching: false,
    fetched: false,
    todoList: [],
    err: null
}

const posts = []


const initState = {
    todos: fromJS(todos),
    posts: fromJS(posts)
}

const store = configureStore(initState)

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <Route path='home' component={Home}/>
                <Route path='todo(/:filter)' component={Todo}/>
                <Route path='users' component={User}>
                    <Route path='home' components={Home}/>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
