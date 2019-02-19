import ACTIONTYPES from '../../constants/ACTIONTYPES'

const {
	CARTUPDATE,
	CARTUPDATED, 
	CARTPRODUCTADDED, 
	CARTPRODUCTDELETED, 
	CARTCLEARED
} = ACTIONTYPES

export default (state = {}, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case CARTUPDATE:
      return {
        ...state,
        ...action.payload
      }
    case CARTUPDATED:
      return {
        ...state,
        ...action.payload
      }
    case CARTPRODUCTADDED:
      return {
        ...state,
        ...action.payload
      }
    case CARTPRODUCTDELETED:
      return {
        ...state,
        ...action.payload
      }
    case CARTCLEARED:
      return {
        ...state,
        ...action.payload
      }
  default:
    return state
  }
}