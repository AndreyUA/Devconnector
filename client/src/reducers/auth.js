import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenicated: null,
  loading: true,
  user: null,
};

//eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenicated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenicated: false,
        loading: false,
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenicated: true,
        loading: false,
        user: payload,
      };
    default:
      return state;
  }
}
