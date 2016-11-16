/**
 * Created by n0m4dz on 11/16/16.
 */
import * as C from './consts'
import {List} from 'immutable';

export default function (state = List([]), action) {
    switch (action.type) {
        case C.FETCH_TODO:
            break;
        case C.TOGGLE_TODO:
            return state = state.map((todo) => {
                if (todo.get('id') === action.id) {
                    return todo.set('completed', !todo.get('completed'))
                }
                return todo;
            })
            break;
        case C.DELETE_TODO:
            return state = state.filter(todo => todo.get('id') !== action.id)
        case C.ADD_TODO:
            break;
        default:
            break;
    }
    return state;
}
