// import React from 'react'
// import {render} from 'react-dom'
// import Todo from './Todo'
// import Immutable from 'immutable'

// import './sass/app'

// render(
//     <Todo>React Todo</Todo>,
    // document.getElementById('root')
// )

//Immutable
console.log('Immutable start here')


//LIST
console.log('List start here');
var state1 = ["todo1", "todo2"];
var state2 = state1;
state2[0] = "newTodo";

console.log(state1[0] == "todo1");

var imState1 = Immutable.List(["todo1", "todo2"])
var imState2 = imState1.set(0, "newTodo");

console.log(imState1.get(0));
console.log(imState2.get(0));


//MAP
console.log('Map start here');
var state1 = {
    user1: {
        name: 'bob',
        age: 16
    },
    user2: {
        name: 'john',
        age: 10
    }
}

var imMapState1 = Immutable.fromJS(state1);
var imMapState2 = imMapState1.set('user1', 'nothing');

console.log(imMapState1.get('user1'));
console.log(imMapState2.get('user2'));

var imMapState3 = imMapState1.setIn(['user1', 'age'], 17);
console.log(imMapState3.getIn(['user1', 'age']));

var stateMixed1 = [
    {
        name: 'bob',
        age: 16
    },
    {
        name: 'john',
        age: 10
    }
]

var imMixedState1 = Immutable.fromJS(stateMixed1);
console.log(imMixedState1);



//REDUX
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Map, List} from 'immutable';

const SET_AGE = 'user/SET_AGE'
const SET_NAME = 'user/SET_NAME'

const ADD_POST = 'post/ADD_POST'

const userReducer = function(state = Map({}), action){
    switch(action.type){
        case SET_AGE: state = state.set('age', action.age); break;
        case SET_NAME: state = state.set('name', action.name); break;
    }
    return state;
}

const postsReducer = function(state = List([]), action){
    return state;
}

var allReducers = combineReducers({
    user: userReducer,
    posts: postsReducer
})

var logger = (store) => (next) => (action) =>{
    console.group(action.type)
    console.log('%c PrevState', 'color: grey', store.getState())
    next(action);
    console.log('%c NextState', 'color: green', store.getState())
    console.groupEnd(action.type)
}

const middleware = applyMiddleware(logger);
const store = createStore(allReducers, {}, middleware);

store.dispatch({type: SET_AGE, age: 16})
store.dispatch({type: SET_NAME, name: 'BAT'})













