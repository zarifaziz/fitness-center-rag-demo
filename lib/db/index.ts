import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "@/lib/env.mjs";

import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const client = postgres(env.DATABASE_URL);
export const db = drizzle(client);

export const query_postgres_raw = (text: string) => pool.query(text);
