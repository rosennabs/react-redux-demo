import { FETCH_USERS_QUOTE } from "./quoteTypes";

const initialState = {
  quote: []
}

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_QUOTE:
      return {
        ...state,
        quote: action.payload
      }
    default:
      return state;
  }
  
}

export default quoteReducer;