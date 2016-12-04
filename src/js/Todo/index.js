/**
 * Created by n0m4dz on 11/8/16.
 */
import React, {Component} from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fromJS} from 'immutable'

import actions from './actions'
import TodoList from './components/TodoList'
import {Link} from 'react-router'

class TempComp extends Component {
    render() {
        return (
            <h1>I am temp component</h1>
        )
    }

    componentWillUnmount() {
        console.log('bye');
    }
}

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.actions.fetchTodo();
    }

    create() {
        render(<TempComp/>, document.getElementById('tempContainer'))
    }

    purge() {
        unmountComponentAtNode(document.getElementById('tempContainer'))
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
                <button onClick={this.create.bind(this)}> create</button>
                <button onClick={this.purge.bind(this)}> purge</button>
                <div id="tempContainer"></div>

                <div className="todo">
                    <header className="header">
                        React Todo
                    </header>
                    <div>
                        <TodoList todos={myState.get('todoList')} actions={childActions}/>
                    </div>
                    <div>
                        <Link to="/todo/active">Active</Link> | <Link to="/todo/completed">Completed</Link> | <Link
                        to="/todo/all">All</Link>
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
