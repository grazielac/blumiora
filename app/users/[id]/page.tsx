import { db } from "@/lib/db";

interface EachUserProps {
    params: { id: string };
}

export default async function EachUser({ params }: EachUserProps) {
    const { id } = await params;

    const res = await db.query("SELECT * FROM users WHERE id = $1", [id]);
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