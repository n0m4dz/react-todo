/**
 * Created by n0m4dz on 11/9/16.
 */
import React, {Component} from 'react'

class Timer extends Component {
    constructor() {
        this.setState = {
            count: 100
        }
    }

    render() {
        return (
            <label>{this.props.count}</label>
        )
    }

    componentDidMount() {
        setInterval(()=> {

        }, 1000);
    }
}
