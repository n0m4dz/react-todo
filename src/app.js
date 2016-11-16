import './sass/app'

import React from 'react'
import {render} from 'react-dom'
import {fromJS} from 'immutable'
import {Provider} from 'react-redux'
import configureStore from './redux/store'
import Todo from './Todo'

var todos = [
    {
        id: 1,
        job: 'Get up',
        completed: true
    },
    {
        id: 2,
        job: 'Go to work',
        completed: true
    },
    {
        id: 3,
        job: 'Have lunch',
        completed: false
    },
    {
        id: 4,
        job: 'Go back to home',
        completed: false
    }
]

var store = configureStore(fromJS(todos))
console.log(store.getState());

render(
    <Provider store={store}>
        <Todo />
    </Provider>,
    document.getElementById('root')
)
