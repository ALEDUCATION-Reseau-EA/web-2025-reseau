import postgres from "postgres";
import "dotenv";
import os from "os";

export const sql = postgres({
    host: `${os.hostname()}.local}`,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    username: process.env.DB_USER
});
