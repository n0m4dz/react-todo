import React, {Component} from 'react'
import Button from '../components/Button'

export default class Counter extends Component{

	constructor(){
		super();

		this.state = {
			countLbl: 0
		}
	}

	increase(){
		console.log('Im clicked');
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
				<Button text='-' clickfn={this.decrease.bind(this)} />
			</div>
		)
	}
}