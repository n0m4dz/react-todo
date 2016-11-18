/**
 * Created by n0m4dz on 11/8/16.
 */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fromJS} from 'immutable'

import actions from '../redux/actions'
import TodoList from './components/TodoList'

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
                        <TodoList todos={myState.get('todos')} actions={childActions}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        myState: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
