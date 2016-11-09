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
        console.log('Constructor', todos);
        this.state = {
            todos: Object.assign([], todos),
            filterVal: 'active',
            timer: false,
            typingTodo: '',
            lastId: todos[todos.length - 1].id
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

    deleteTodo(id) {
        let oldTodos = this.state.todos;
        let newTodos = oldTodos.filter((t) => {
            return t.id != id
        })

        this.setState({
            todos: newTodos
        })

        todos = todos.filter((t) => {
            return t.id != id
        })
    }

    addTodo(e) {
        e.preventDefault();

        let newTodo = {
            id: ++this.state.lastId,
            job: this.state.typingTodo,
            completed: false
        }

        todos.push(newTodo);

        this.setState({
            todos: Object.assign([], todos), //Object assign ni tuhain obj-g huulj avdag.
            lastId: newTodo.id
        })
    }

    inputChangeHandler(e) {
        this.setState({
            typingTodo: e.target.value
        })
    }

    toggleTimer() {
        // this.setState()
    }

    componentWillMount() {
        console.log('Will Mount', todos);
        // this.setState({
        //     todos: todos
        // })
    }

    componentDidUpdate(a, b) {
        console.log(this.state.todos === todos)
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
        console.log(todos);

        var {todos, filterVal} = this.state;
        var actions = {
            toggle: this.toggle.bind(this),
            delete: this.deleteTodo.bind(this)
        }

        var timer = this.state.timer ?
            <div>
                <input type="text" className="form-control"/>
                <button className="btn btn-default">Run timer</button>
                <button className="btn btn-default">Hide timer</button>
            </div>
            :
            <div>
                <button className="btn btn-default">Show timer</button>
            </div>

        return (
            <div>
                <div className="timer-toggle">
                    {timer}
                </div>
                <div className="todo">
                    <header className="header">
                        {this.props.children}
                    </header>

                    <form className="form-inline" onSubmit={this.addTodo.bind(this)}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Add todo"
                                   onChange={this.inputChangeHandler.bind(this)}/>
                        </div>
                        <button className="btn btn-outline-success">Add</button>
                    </form>
                    <hr/>

                    <h4 className="todo-title">{filterVal} todo list</h4>
                    <TodoList todos={todos} actions={actions}/>
                    <br/>

                    <div className="action-btns">
                        <button type="button" className="btn btn-outline-primary" onClick={()=>this.filter('active')}>
                            Active
                        </button>
                        <button type="button" className="btn btn-outline-primary"
                                onClick={()=>this.filter('completed')}>
                            Completed
                        </button>
                        <button type="button" className="btn btn-outline-primary"
                                onClick={this.filter.bind(this, 'all')}>
                            All
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {

    }

}
