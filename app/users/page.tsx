import { db } from "@/lib/db";

export default async function Users() {
    const res = await db.query("SELECT * FROM users");
    const users = res.rows;

    console.log(users);

    return (
        <>
            {users.map((user) => (
                <h1 key={user.id}>
                    {user.username} | {user.bio}
                </h1>
            ))}        
        </>
    );
}