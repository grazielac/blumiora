import { db } from "../lib/db";

async function test () {
    const res = await db.query("SELECT NOW(");
    console.log("Connected! Server time:", res.rows[0]);
}

test();