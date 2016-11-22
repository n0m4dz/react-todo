/**
 * Created by n0m4dz on 11/8/16.
 */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fromJS} from 'immutable'

import actions from '../redux/actions'
import TodoList from './components/TodoList'
import {Link} from 'react-router'

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.actions.fetchTodo();
    }

    render() {
        const {dispatch, myState, actions} = this.props;
        const {toggleTodo, deleteTodo} = actions;

        const childActions = {
            toggle: toggleTodo,
            delete: deleteTodo
        }

        return (
            <div>
                <div className="todo">
                    <header className="header">
                        React Todo
                    </header>
                    <div>
                        <TodoList todos={myState.get('todoList')} actions={childActions}/>
                    </div>
                    <div>
                        <Link to="/active">Active</Link> | <Link to="/completed">Completed</Link> | <Link
                        to="/all">All</Link>
                    </div>

                </div>

            </div>
        )
    }
}

function getFilteredTodos(todos, filter) {

    switch (filter) {
        case 'all':
            return todos
        case 'active':
            return todos.set('todoList', todos.get('todoList').filter((t) => !t.get('completed')))
        case 'completed':
            return todos.set('todoList', todos.get('todoList').filter(t => t.get('completed')))
    }
}

function mapStateToProps(state, myProps) {
    let filter = myProps.params.filter || 'all'

    return {
        myState: getFilteredTodos(state.todos, filter)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
