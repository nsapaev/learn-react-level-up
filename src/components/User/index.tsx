import React from "react";
import { useRef, Suspense, useMemo } from "react";
import { useUserWithPosts } from "../../hooks/useFetchUserWithPosts";
import { UserCard } from "../UserCard";
const LongPostsCount = React.lazy(() => import("../LongPostCount"));

export function User() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { state, isLoading, reset, clickHandler } = useUserWithPosts();

  const longPostsCount = useMemo(() => {
    return state.posts.filter((p) => p.body.length > 100).length;
  }, [state.posts]);

  return (
    <>
      <div>
        <input ref={inputRef} type="number" />
        <button onClick={() => clickHandler(Number(inputRef.current?.value))}>
          see user post
        </button>
        <button onClick={reset}> Reset</button>
      </div>

      {isLoading && <p>Loading...</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      <div>
        <h2>User with posts</h2>
        {state.user && <UserCard user={state.user} posts={state.posts} />}
        {state.user && (
          <Suspense fallback={<p>Loading long post...</p>}>
            <LongPostsCount count={longPostsCount} />
          </Suspense>
        )}
      </div>
    </>
  );
}
