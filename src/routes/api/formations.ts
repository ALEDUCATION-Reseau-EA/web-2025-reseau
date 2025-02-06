import type { APIEvent } from "@solidjs/start/server";
import { sql } from "~/db";

export async function GET(event: APIEvent) {
    try {
        const formations = await sql`SELECT * FROM Formation`;
        return new Response(JSON.stringify(formations), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
