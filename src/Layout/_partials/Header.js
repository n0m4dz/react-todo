/**
 * Created by n0m4dz on 11/23/16.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="navbar">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/todo">Todo</Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
export default Header
