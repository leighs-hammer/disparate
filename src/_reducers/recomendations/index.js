export default (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        result: action.payload
      }
   default:
    return state
  }
 }