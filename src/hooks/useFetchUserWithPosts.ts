import { useReducer, useCallback } from "react";
import { reducer, initialState } from "../state/reducers/userPostsReducer";
import { BASEAPI } from "../api";

export function useUserWithPosts() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandler = useCallback(async (id: number) => {
    const userId = Number(id);

    if (!userId) return;

    dispatch({ type: "REQUEST" });

    try {
      const [userRes, userPostsRes] = await Promise.all([
        fetch(BASEAPI + `users/${id}`),
        fetch(BASEAPI + `users/${id}/posts`),
      ]);

      if (!userRes.ok || !userPostsRes.ok) {
        return;
      }

      const [user, posts] = await Promise.all([
        userRes.json(),
        userPostsRes.json(),
      ]);
      dispatch({ type: "SUCCESS", payload: { user, posts } });
    } catch (err) {
      dispatch({ type: "FAILURE", payload: "Ошибка загрузки данных" });
    }
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  return { state, isLoading: state.loading, reset, clickHandler };
}
