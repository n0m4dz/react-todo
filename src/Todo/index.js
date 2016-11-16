/**
 * Created by n0m4dz on 11/8/16.
 */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {toJS} from 'immutable'

import actions from '../redux/actions'
import TodoList from './components/TodoList'

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {dispatch, todos, actions} = this.props;
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
                        <TodoList todos={todos} actions={childActions}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
