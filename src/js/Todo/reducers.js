/**
 * Created by n0m4dz on 11/16/16.
 */
import * as C from './consts'
import {Map, fromJS} from 'immutable';

export default function (state = Map({}), action) {
    switch (action.type) {
        case 'TODO_PENDING':
            return state.set('fetching', true);
        case 'TODO_FULFILLED':
            return state.set('fetching', false).set('fetched', true).set('todoList', fromJS(action.payload.data));
        case 'TODO_REJECTED':
        //return Object.assign({}, state.err = action.payload)
        case C.TOGGLE_TODO:
            return state.set('todoList', state.get('todoList').map((todo) => {
                if (todo.get('id') === action.id) {
                    return todo.set('completed', !todo.get('completed'))
                }
                return todo;
            }))
            break;
        case C.DELETE_TODO:
            return state.set('todoList', state.get('todoList').filter(todo => todo.get('id') !== action.id))
        case C.ADD_TODO:
            break;
        default:
            break;
    }
    return state;
}
