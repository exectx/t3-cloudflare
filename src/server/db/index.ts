// import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/d1";

import { env } from "@/env";
import * as schema from "./schema";

// export const get = (d1: D1Database) => drizzle(d1, { schema });

export interface Env {
  DB: D1Database;
}

// let a: Env['DB']
export const db = drizzle(
  process.env.DB as unknown as D1Database,
  { schema }
);
