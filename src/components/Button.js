import React, {Component} from 'react'

export default class Button extends Component{
	render(){
		const {text, clickfn} = this.props;

		return(
			<button onClick={() => clickfn()}>{text}</button>
		)
	}
}