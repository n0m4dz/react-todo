/**
 * Created by n0m4dz on 11/8/16.
 */
import React, {Component} from 'react';
import TodoList from './components/TodoList'

var todos = [
    {
        id: 1,
        job: 'Get up',
        completed: true
    },
    {
        id: 2,
        job: 'Go to work',
        completed: true
    },
    {
        id: 3,
        job: 'Have lunch',
        completed: false
    },
    {
        id: 4,
        job: 'Go back to home',
        completed: false
    }
]

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: todos,
            filterVal: 'active'
        }
    }

    add() {
        //e.preventDefault();
        //console.log('Im working')
    }

    toggle(id) {
        let oldTodos = this.state.todos;
        let newTodos = oldTodos.map((t) => {
            if (t.id == id) {
                t.completed = !t.completed
            }
            return t
        })

        this.setState({
            todos: newTodos
        })

    }

    filter(filterValue) {
        switch (filterValue) {
            case 'active':
                this.setState({
                    filterVal: filterValue,
                    todos: todos.filter(item => !item.completed)
                })
                break
            case 'completed':
                this.setState({
                    filterVal: filterValue,
                    todos: todos.filter(item => item.completed)
                })
                break
            default:
                this.setState({
                    filterVal: filterValue,
                    todos: todos
                });
                break
        }
    }

    componentWillMount() {
        this.setState({
            filterVal: 'all'
        })
    }

    render() {
        var {todos, filterVal} = this.state;
        return (
            <div className="todo">
                <header className="header">
                    {this.props.children}
                </header>

                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Add todo"/>
                    </div>
                    <button className="btn btn-outline-success" onClick={this.add()}>Add</button>
                </form>
                <hr/>

                <h4 className="todo-title">{filterVal} todo list</h4>
                <TodoList todos={todos} actions={ {toggle: this.toggle.bind(this)}}/>
                <br/>

                <div className="action-btns">
                    <button type="button" className="btn btn-outline-primary" onClick={()=>this.filter('active')}>
                        Active
                    </button>
                    <button type="button" className="btn btn-outline-primary" onClick={()=>this.filter('completed')}>
                        Completed
                    </button>
                    <button type="button" className="btn btn-outline-primary" onClick={()=>this.filter('all')}>
                        All
                    </button>
                </div>
            </div>
        )
    }

    componentDidMount() {

    }

}
