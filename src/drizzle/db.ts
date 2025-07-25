import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from "~/data/env/server";
import * as schema from "~/drizzle/schema";

const sql = neon(env.DATABASE_URL);
export const db = drizzle({ client: sql, schema: schema });
