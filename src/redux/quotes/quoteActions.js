import { FETCH_USERS_QUOTE } from "./quoteTypes";

const fetchUsersQuote = () => {
  return {
    type: FETCH_USERS_QUOTE,
    payload: quotes
  };
}

export default fetchUsersQuote;