import React from 'react'
import ReactDOM from 'react-dom'
import CONSTANTS from '../constants'


const Portal = (props) => {
	const {PORTALS} = CONSTANTS

	const {target} = props

	if (!target) {return ""}
	return ReactDOM.createPortal(
		props.children,
		target,
	)
}

export default Portal