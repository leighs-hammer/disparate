import ACTIONTYPES from '../../constants/ACTIONTYPES'

const {TOGGLELOADING} = ACTIONTYPES

export default (state = {}, action) => {
  switch (action.type) {
    case TOGGLELOADING:
      return action.payload
  default:
    return state
  }
}