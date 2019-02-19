import CONSTANTS from '../../constants';

export const toggleLoading = (current) => ({type: CONSTANTS.ACTIONTYPES.TOGGLELOADING, payload: !current})