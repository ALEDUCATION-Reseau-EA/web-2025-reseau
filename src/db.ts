import postgres from "postgres";

export const sql = postgres({
    host: import.meta.env.VITE_DB_HOST,
    port: import.meta.env.VITE_DB_PORT,
    database: import.meta.env.VITE_DB_NAME,
    username: import.meta.env.VITE_DB_USER,
    password: import.meta.env.VITE_DB_PASS
});
