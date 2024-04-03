import { combineReducers } from "redux";
import quoteReducer from "./quotes/quoteReducer";
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
  user: usersReducer,
  quote: quoteReducer
})

export default rootReducer;