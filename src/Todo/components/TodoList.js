/**
 * Created by n0m4dz on 11/8/16.
 */
import React, {Component} from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        var {todos} = this.props;
        return (
            <ul className="list-group">
                {
                    todos.map((t, i)=> <TodoItem job={t.job} completed={t.completed} key={`todo-${i}`}/>)
                }
            </ul>
        )
    }
}
