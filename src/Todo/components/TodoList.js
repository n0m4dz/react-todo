/**
 * Created by n0m4dz on 11/8/16.
 */
import React, {Component} from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {todos, actions} = this.props;
        return (
            <ul className="list-group">
                {
                    todos.map((t, i)=> <TodoItem item={t} key={`todo-${i}`} toggle={actions.toggle} del={actions.delete}/>)
                }
            </ul>
        )
    }
}
