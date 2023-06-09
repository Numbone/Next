import { IPost } from "@/types";
import React from "react";
type Props = {
  params: {
    id: string;
  };
};
async function getData(id: string): Promise<IPost> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}
const BlogId = async ({ params: { id } }: Props) => {
  const post = await getData(id);

  return (
    <div className="flex columns-1">
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
      <div>{post.userId}</div>
    </div>
  );
};

export default BlogId;
