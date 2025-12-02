export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface State {
  loading: boolean;
  error: string | null;
  user: User | null;
  posts: Post[];
}

export type Action =
  | { type: "REQUEST" }
  | { type: "SUCCESS"; payload: { user: User; posts: Post[] } }
  | { type: "FAILURE"; payload: string }
  | { type: "RESET" };
