/**
 * Created by n0m4dz on 11/16/16.
 */
import * as C from './consts'
import axios from 'axios'

let actions = {
    fetchTodo: function () {
        return {
            type: C.FETCH_TODO,
            payload: axios.get('http://localhost:8000')
        }
    },
    toggleTodo: function (id) {
        return {
            type: C.TOGGLE_TODO,
            id: id
        }
    },
    deleteTodo: function (id) {
        return {
            type: C.DELETE_TODO,
            id: id
        }
    },
    addTodo: function (job) {
        return {
            type: C.ADD_TODO,
            payload: axios.get('http://localhost:8000')
            // job: job
        }
    }
}

export default actions;
