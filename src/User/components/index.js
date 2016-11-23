/**
 * Created by n0m4dz on 11/23/16.
 */
import React, {Component} from 'react'

class User extends Component {
    render() {
        return (
            <div>
                <h1>I am user page</h1>
                <div>
                    {this.props.children}
                </div>
            </div>

        )
    }
}
export default User
