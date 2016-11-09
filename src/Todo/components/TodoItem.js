/**
 * Created by n0m4dz on 11/8/16.
 */
import React, {PropTypes} from 'react'

const TodoItem = ({item, actions}) => {
    let status = item.completed === true ? 'checked' : ''
    return (
        <li className="list-group-item">
            <input type="checkbox" checked={status} onChange={()=>actions.toggle(item.id)}/> {item.job} <a
            className="delete-btn">x</a>
        </li>
    )
}

TodoItem.propTypes = {
    job: PropTypes.string,
    completed: PropTypes.bool
}

TodoItem.defaultProps = {
    job: '',
    completed: false
}

export default TodoItem;
