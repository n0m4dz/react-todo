import React from 'react'
import {render} from 'react-dom'
import Counter from './containers/Counter'

render(
	<Counter default={12} />,
	document.getElementById('root')
)