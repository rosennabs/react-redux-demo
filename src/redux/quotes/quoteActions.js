import { FETCH_USERS_QUOTE } from "./quoteTypes";
import axios from "axios";

const fetchUsersQuote = (quote) => {
  return {
    type: FETCH_USERS_QUOTE,
    payload: quote
  };
}

const fetchQuote = () => {
  return function (dispatch) {
    axios.get("https://api.quotable.io/quotes/random")
      .then((response) => {
        const quote = response.data;
        console.log(quote);
        dispatch(fetchUsersQuote(quote))
      })
      .catch(error => {
        console.error("Error fetching quotes: ", error.message);
    })
  }
}

export default fetchQuote;