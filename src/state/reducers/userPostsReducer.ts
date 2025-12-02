import type { State, Action } from "../../types/userPosts";

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "REQUEST":
      return { ...state, loading: true, error: null };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload.user,
        posts: action.payload.posts,
      };
    case "FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: null,
        posts: [],
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export const initialState: State = {
  loading: false,
  error: null,
  user: null,
  posts: [],
};
