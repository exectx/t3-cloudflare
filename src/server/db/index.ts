import { binding } from "cf-bindings-proxy";
import { drizzle } from "drizzle-orm/d1";

import { env } from "@/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: D1Database | undefined;
};

/**
 * NOTE: I am not using https://github.com/cloudflare/next-on-pages/tree/main/internal-packages/next-dev since it can't be called at the top level
 */
export const conn = globalForDb.conn ?? binding<D1Database>(env.D1_BINDING);
if (env.NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(conn, { schema });
