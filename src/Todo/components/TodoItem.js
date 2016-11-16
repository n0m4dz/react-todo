/**
 * Created by n0m4dz on 11/8/16.
 */
import React, {PropTypes} from 'react'

const TodoItem = ({item, toggle, del}) => {
    let status = item.get('completed') === true ? 'checked' : ''
    return (
        <li className="list-group-item">
            <input type="checkbox" checked={status} onChange={()=>toggle(item.get('id'))}/>
            {item.get('job')}
            <a className="delete-btn" onClick={()=>del(item.get('id'))}>x</a>
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
