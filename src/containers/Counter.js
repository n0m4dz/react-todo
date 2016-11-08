import React, {Component} from 'react'
import Button, {btn} from '../components/Button'

export default class Counter extends Component{

	constructor(props){
		super(props);

		this.state = {
			countLbl: props.default
		}
	}

	increase(){
		this.setState(
				{
					countLbl: ++this.state.countLbl
				}
			)
	}

	decrease(){
		this.setState(
				{
					countLbl: --this.state.countLbl
				}
			)
	}

	render(){
		return (
			<div>
			<label>{ this.state.countLbl }</label>
				<br />
				<button onClick={this.increase.bind(this)}>+</button>
				<Button text='-' aa="apple" clickfn={this.decrease.bind(this)} />
				<btn />
			</div>
		)
	}
}