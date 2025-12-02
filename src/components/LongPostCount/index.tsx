export default function LongPostCount({ count }: { count: number }) {
  console.log("LongPostsCount rendered");
  return <p>Long posts: {count}</p>;
}
