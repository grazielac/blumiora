import { db } from "@/lib/db";

interface EachUserProps {
  params: { id: string };
}

export default async function EachUser({ params }: EachUserProps) {
  const { id } = await params;

  const userId = Number(id);
    if (isNaN(userId)) {
        return <h1>Invalid user ID</h1>;
    }

  const res = await db.query("SELECT * FROM users WHERE user_id = $1", [
    userId,
  ]);
  const user = res.rows[0];

  if (!user) {
    return <h1>User not found</h1>;
  }

  return (
    <>
      <h1>
        {user.username} | {user.bio}
      </h1>
    </>
  );
}
