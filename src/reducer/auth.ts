import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from "../action/auth";

const initialState = {
  isLogging: false,
  isLogin: false,
  user: {},
};

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case USER_LOGIN_START:
      return {
        ...state,
        isLogging: true,
        isLogin: false,
        user: {},
      };

    case USER_LOGIN_FAILED:
      return {
        ...state,
        isLogging: false,
        isLogin: false,
        user: {},
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        isLogin: true,
        user: action.data,
      };

    default:
      return state;
  }
}
