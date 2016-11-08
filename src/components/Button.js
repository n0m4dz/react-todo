import React, {Component} from 'react'

export default class Button extends Component {

    componentWillMount() {
       // console.log('I am button will mount');
    }

    render() {
        const {text, clickfn} = this.props;

        return (
            <button onClick={() => clickfn()}>{text}</button>
        )
    }

    componentDidMount() {
        //console.log('I am button did mount');
    }
}
