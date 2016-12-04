/**
 * Created by n0m4dz on 12/4/16.
 */
import {combineReducers} from 'redux'
import todoReduce from './Todo/reducers'
import postReducer from './User/reducers'

export default combineReducers({
    todos: todoReduce,
    posts: postReducer
})
