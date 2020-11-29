import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from "../actions/types";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((item) =>
          item._id === payload.id ? { ...item, likes: payload.likes } : item
        ),
        loading: false,
      };
    default:
      return state;
  }
}