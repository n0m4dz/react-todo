/**
 * Created by n0m4dz on 11/8/16.
 */
import React, {Component} from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        var {todos, filter} = this.props;
        console.log(filter)
        return (
            <ul className="list-group">
                {
                    filter === 'all' ? todos.map((t, i)=> {
                        return <TodoItem job={t.job} completed={t.completed} key={`todo-${i}`}/>
                    }) : ''
                }
            </ul>
        )
    }
}
