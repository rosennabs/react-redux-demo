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


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

export default usersReducer;