import ACTIONTYPES from '../../constants/ACTIONTYPES'

const {
	SETNOTIFICATION,
	DISPLAYNOTIFICATION,
	HIDENOTIFICATION,
	UNSETNOTIFICATION
} = ACTIONTYPES

export default (state = {}, action) => {
  switch (action.type) {
    case SETNOTIFICATION:
      return {
        ...state,
        ...action.payload
      }
    case UNSETNOTIFICATION:
      return {
        ...state,
        ...action.payload
      }
    case DISPLAYNOTIFICATION:
      return {
        ...state,
        ...action.payload
      }
    case HIDENOTIFICATION:
      return {
        ...state,
        ...action.payload
      }
  default:
    return state
  }
}