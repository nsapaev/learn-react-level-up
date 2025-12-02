import React from "react";
import type { User, Post } from "../../types/userPosts";

interface IUserCardProps {
  user: User;
  posts: Post[];
}

export const UserCard = React.memo((props: IUserCardProps) => {
  const { user, posts } = props;

  return (
    <div>
      <div
        style={{
          border: "1px solid white",
          padding: "5px 10px ",
        }}
      >
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>Posts: {posts.length}</p>
      </div>
    </div>
  );
});
