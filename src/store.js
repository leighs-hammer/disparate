import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './_reducers'
import initialState from './initialState'


// Enhancers & middleware
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  if (typeof devToolsExtension === 'function') {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  }
}

const middleware = [thunk]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)


export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    composedEnhancers,
  )
}