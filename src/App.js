import React from 'react';
import { connect } from 'react-redux'
import CONSTANTS from './constants'

import LoadingBar from './Components/Loading'
import Portal from './Components/Portals'


import {disablePortal, enablePortal} from "./_actions/portals/creators"
import {toggleLoading} from './_actions/loading/creators'

const mapStateToProps = state => ({
  portals : state.portals,
  loading: state.loading,
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  enablePortal: key => dispatch(enablePortal(key)),
  disablePortal: key => dispatch(disablePortal(key)),
  toggleLoading: (current) => dispatch(toggleLoading(current)) 
})

const App = (props) => {
  const {
    cart,
    loading, 
    toggleLoading,
    portals, 
    enablePortal, 
    disablePortal
  } = props

  const togglePortal = key => portals[key] ? disablePortal(key) : enablePortal(key)
  const isActive = key => portals[key]
  const ToggleLi = (props) => {
    console.log(props)
    return (
      <li onClick={() => togglePortal(props.portal)}>
        {isActive(props.portal) ? "Disable" : "Enable" } {props.portal}</li>
    )
  }
  return (
    <div className="App">
    <ul>
    <ToggleLi portal={CONSTANTS.PORTALS.RECOMMENDATIONS} />
    <ToggleLi portal={CONSTANTS.PORTALS.MINICART} />
    <ToggleLi portal={CONSTANTS.PORTALS.MINIBASKET} />
    <ToggleLi portal={CONSTANTS.PORTALS.NOTIFICATIONS} />
    </ul>
    
    <ul>
    <ToggleLi portal={CONSTANTS.PORTALS.LOADING} />
    <li onClick={() => toggleLoading(loading)}>{loading?"Stop": "Set"} Loading</li> 
    </ul>
    
    <Portal target={CONSTANTS.PORTALS.RECOMMENDATIONS}>
    <h2 style={{width: "100%", minHeight: "100px", backgroundColor: "rgba(0,0,0,0.2)", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px", marginBottom: "30px"}}>{CONSTANTS.PORTALS.RECOMMENDATIONS}</h2>
    </Portal>
    
    <Portal target={CONSTANTS.PORTALS.MINIBASKET}>
      <span>{CONSTANTS.PORTALS.MINIBASKET}</span>
      <span>{cart.items.length}</span>
    </Portal>

    <Portal target={CONSTANTS.PORTALS.LOADING}>
      <LoadingBar />
    </Portal>
      
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
