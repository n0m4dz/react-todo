/**
 * Created by n0m4dz on 11/16/16.
 */
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import todoReduce from './reducers'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

let finalCreateStore = compose(
    applyMiddleware(promise(), thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

var reducer = combineReducers({
    todos: todoReduce
})

export default function configureStore(initialState) {
    return finalCreateStore(reducer, initialState)
}
