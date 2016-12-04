/**
 * Created by n0m4dz on 11/23/16.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-default">
                    <div className="navbar-header">
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
                </nav>
            </header>
        )
    }
}
export default Header
