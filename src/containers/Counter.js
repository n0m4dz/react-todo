import React, {Component} from 'react'
import Button, {btn} from '../components/Button'
import Label from '../components/Label';

export default class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            countLbl: props.default,
            color: 'red'
        }
    }

    increase() {
        this.setState(
            {
                countLbl: ++this.state.countLbl
            }
        )
    }

    decrease() {
        this.setState(
            {
                countLbl: --this.state.countLbl
            }
        )
    }

    componentWillMount() {
        const {init, users} = this.props;
        var positives = init.filter((item) => {
            return item > 0
        });
        var userNames = users.map(user => user.name);
        console.log('WILL*** mount', this.state.color);
    }

    shouldComponentUpdate() {
        return true;
    }

    changeColor() {
        let colors = ['blue', 'green', 'red', 'black'];
        let color = colors[Math.floor(Math.random() * (4))];
        console.log(color);
        this.setState({
            color: color
        });
    }

    render() {
        console.log('Render', this.state.color);
        return (
            <div>
                <div style={{color: this.state.color}}>I am colored</div>
                <button onClick={this.changeColor.bind(this)}>change color</button>

                <Label count={this.state.countLbl}/>
                <br />
                <Label count={this.state.countLbl}/>
                <br />
                <Label count={this.state.countLbl}/>
                <br />
                <Label count={this.state.countLbl}/>
                <br />
                <Label count={this.state.countLbl}/>
                <br />

                <button onClick={this.increase.bind(this)}>+</button>
                <Button text='-' aa="apple" clickfn={this.decrease.bind(this)}/>
                <btn />
            </div>
        )
    }

    componentDidMount() {
        console.log('DID**** mount', this.state.color);
    }

    componentWillUpdate() {
        // console.log('I am working - will update');
        console.log('Will update mount', this.state.color);
        return false;
    }
}
