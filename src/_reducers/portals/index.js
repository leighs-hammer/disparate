import ACTIONTYPES from '../../constants/ACTIONTYPES'

const {ENABLEPORTAL, DISABLEPORTAL} = ACTIONTYPES

export default (state = {}, action) => {
  switch (action.type) {
    case ENABLEPORTAL:
      return {
        ...state,
        ...action.payload
      }
    case DISABLEPORTAL:
    return {
        ...state,
        ...action.payload
      }
  default:
    return state
  }
}