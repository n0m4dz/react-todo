/**
 * Created by n0m4dz on 11/16/16.
 */
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducer from './reducer'

let finalCreateStore = compose(
    applyMiddleware(promise(), thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(initialState) {
    return finalCreateStore(reducer, initialState)
}
