import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  HANDLE_CLOSE_REQUEST,
} from "./usersTypes";
import axios from 'axios';

//Define the action creators

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};

export const handleCloseRequest = () => {
  return {
    type: HANDLE_CLOSE_REQUEST,
  };
};

//Define the asynchronous action creator function
export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest()) //This sets loading to true

      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          const users = response.data
          dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
      dispatch(fetchUsersFailure(error.message))
    })

  }
  
}

