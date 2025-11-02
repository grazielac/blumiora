import { db } from "@/lib/db";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    id: string;
  };
}

async function PostPage({ params }: PostPageProps) {
  const { id } =  params;
  const result = await db.query(`SELECT * FROM posts WHERE user_id = $1`, [id]);

  const post = result.rows[0];

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostPage;
