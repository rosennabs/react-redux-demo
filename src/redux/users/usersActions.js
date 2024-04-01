import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./usersTypes";

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

//Define the asynchronous action creator function
const fetchUsers = () => {
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

export default {
  fetchUsers
}