import React from 'react'
import {render} from 'react-dom'
import Counter from './containers/Counter'

var initState = window.initState;

render(
    <Counter default={10} init={initState.countList} users={initState.users}/>,
    document.getElementById('root')
)
