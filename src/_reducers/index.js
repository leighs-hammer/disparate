import { combineReducers } from 'redux';

// reducers
import cart from './cart'
import loading from './loading'
import notifications from './notifications'
import portals from './portals'
import recReducer from './recomendations'

export default combineReducers({
  cart,
  loading,
  notifications,
  portals,
  recReducer
})