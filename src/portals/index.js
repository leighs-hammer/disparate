import React from 'react'
import ReactDOM from 'react-dom'
import CONSTANTS from '../constants'
const {PORTALS} = CONSTANTS


/**
 * ## generateStringSelector
 * out puts the combined selector as a string
 * @param {string} target - string KEY from CONSTANTS.PORTALS 
 * @returns {string} - data-attribute-BASE="TARGET"
 */
export const generateStringSelector = (target) => `[${PORTALS.BASE}="${target}"]`

/**
 * ## getTargetNode 
 * Gets the target node where the portal will go. 
 * @param {string} target - string KEY from CONSTANTS.PORTALS 
 * 
 */
export const getTargetNode = (target) => {
	console.log(target)
	console.log(generateStringSelector(target))
	if(!target) {return false}
	return document.querySelector(generateStringSelector(target))
}

/**
 * ## checkForDupes
 * @param {string} target - string KEY from CONSTANTS.PORTALS 
 * @returns {boolean} - true if duplicates exist
 */
export const checkForDupes = (target) => {
	if(!target) {return false}
	const nodes = document.querySelectorAll(generateStringSelector(target))
	if(nodes && nodes.length > 1 ) {
		console.error('A duplicate portal node was found, the portal will only target the first node. you may wish to use MultiPortals Component when available')
		return true
	}
	return false
}

// component
const Portal = (props) => {
	const {target} = props
	if (!target) {return null}

	const node = getTargetNode(target)
	console.log(getTargetNode(target))
	if(!node) {return null}

	const dupes = checkForDupes(target)

	if(dupes) {
		// possibly divert log and space to divert render to multi
	}

	return ReactDOM.createPortal(
		props.children,
		node,
	)
}

export default Portal