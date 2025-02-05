import postgres from "postgres";
import "dotenv";

export const sql = postgres({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    username: process.env.DB_USER
});

export default {
    async getFormations(): Promise<any> {
        return await sql`SELECT * FROM Formation`;
    },
}
