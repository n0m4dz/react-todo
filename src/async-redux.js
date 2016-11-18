//REDUX
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Map, List, fromJS} from 'immutable';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';

// const FETCHING_TODOS = 'todos/FETCHING_TODOS'
// const RECEIVED_TODOS = 'todos/RECEIVED_TODOS'
// const FAILED = 'todos/FAILED'

var initState = {
    fetching: false,
    fetched: false,
    todos: [],
    err: null
}

const reducer = function (state = initState, action) {
    switch (action.type) {
        case 'TODO_PENDING':
            return Object.assign({}, state.fetching = true)
        case 'TODO_FULFILLED':
            var newState = Object.assign({}, state)
            newState.fetching = false;
            newState.fetched = true;
            newState.todos = action.payload.data;
            return newState;
        case 'TODO_REJECTED':
            return Object.assign({}, state.err = action.payload)
    }
    return state;
}

var logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('%c PrevState', 'color: grey', store.getState())
    next(action);
    console.log('%c NextState', 'color: green', store.getState())
    console.groupEnd(action.type)
}

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducer, {}, middleware);

store.dispatch({
    type: 'TODO',
    payload: axios.get('http://localhost:8000')
});


// store.dispatch((dispatch) => {
//     dispatch({type: FETCHING_TODOS})
//     axios.get('http://localhost:8000')
//         .then((response)=> {
//             dispatch(
//                 {
//                     type: RECEIVED_TODOS,
//                     payload: response.data
//                 })
//         })
//         .catch((err)=> {
//             dispatch(
//                 {
//                     type: FAILED,
//                     payload: err
//                 })
//         })
// })
