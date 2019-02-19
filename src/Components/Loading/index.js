import React from 'react'
import {connect} from 'react-redux'
import {toggleLoading} from '../../_actions/loading/creators'

import './loading.scss'

const mapStateToProps = state => ({
	loading: state.loading
})

const mapDispatchToProps = dispatch => ({
	toggleLoading: (current) => dispatch(toggleLoading(current))
})

const LoadingBar = (props) => {
	const {loading, toggleLoading} = props

	if(!loading) {return null}
	return (
		<div className="loadingBar" onClick={() => toggleLoading(props.loading)}>
			<span className="indicator">Loading</span>
		</div>
	)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps 
	)(LoadingBar)