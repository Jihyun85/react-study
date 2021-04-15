import * as postApi from "../api/posts";
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "../lib/asyncUtils";

// 액션
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

// 액션 함수

// 리팩토링 전
// export const getPosts = () => async (dispatch) => {
//   dispatch({ type: GET_POSTS });
//   try {
//     const posts = await postApi.getPosts();
//     dispatch({ type: GET_POSTS_SUCCESS, posts });
//   } catch (error) {
//     dispatch({ type: GET_POSTS_ERROR, error });
//   }
// };

// export const getPost = () => async (dispatch) => {
//   dispatch({ type: GET_POST });
//   try {
//     const post = await postApi.getPost();
//     dispatch({ type: GET_POST_SUCCESS, post });
//   } catch (error) {
//     dispatch({ type: GET_POST_ERROR, error });
//   }
// };

// 리팩토링 후
export const getPosts = createPromiseThunk(GET_POSTS, postApi.getPosts);
export const getPost = createPromiseThunk(GET_POST, postApi.getPostById);

// 리팩토링 전
// const initialState = {
//   posts: {
//     loading: false,
//     data: null,
//     error: null,
//   },
//   post: {
//     laoding: false,
//     data: null,
//     error: null,
//   },
// };

// 리팩토링 후
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

// 리팩토링 전
// export default function posts(state = initialState, action) {
//   switch (action.type) {
//     case GET_POSTS:
//       return {
//         ...state,
//         posts: reducerUtils.loading(),
//       };
//     case GET_POSTS_SUCCESS:
//       return {
//         ...state,
//         posts: reducerUtils.success(action.payload),
//       };
//     case GET_POSTS_ERROR:
//       return {
//         ...state,
//         posts: reducerUtils.error(action.error),
//       };
//     case GET_POST:
//       return {
//         ...state,
//         post: reducerUtils.loading(),
//       };
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         post: reducerUtils.payload(action.payload),
//       };
//     case GET_POST_ERROR:
//       return {
//         ...state,
//         post: reducerUtils.error(action.error),
//       };
//     default:
//       return state;
//   }
// }

// 리팩토링 후
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActions(GET_POST, "post")(state, action);
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, "posts")(state, action);
    default:
      return state;
  }
}
