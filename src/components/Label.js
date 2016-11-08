/**
 * Created by n0m4dz on 11/8/16.
 */
import React, {Component} from 'react'

// const Label = ({count}) => (
//     <label>{count}</label>
// )

class Label extends Component {

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <label>{this.props.count}</label>
        )
    }
}

export default Label;
