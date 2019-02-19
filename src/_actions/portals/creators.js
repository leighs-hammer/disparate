import ACTIONTYPES from '../../constants/ACTIONTYPES'
const {ENABLEPORTAL, DISABLEPORTAL} = ACTIONTYPES

export const enablePortal = (key) => ({ type: ENABLEPORTAL, payload: {[key] : true}  })

export const disablePortal = (key) => ({ type: DISABLEPORTAL, payload: {[key] : false}  })