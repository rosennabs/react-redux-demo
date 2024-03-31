import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./usersTypes";


const initialState = {
  loading: false,
  users: [],
  error: ''
}