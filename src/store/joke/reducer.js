import {LOAD_JOKES} from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_JOKES:
      console.log(state)
      const jokes = state.jokes || []
      return {
        ...state,
        jokes: action.payload && action.payload.data
      };
    default:
      return state;
  }
};
