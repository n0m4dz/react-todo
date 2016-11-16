/**
 * Created by n0m4dz on 11/16/16.
 */
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers'
import createLogger from 'redux-logger'

let logger = createLogger();

let finalCreateStore = compose(
    applyMiddleware(logger)
)(createStore)

export default function configureStore(initialState) {
    return finalCreateStore(reducer, initialState)
}
