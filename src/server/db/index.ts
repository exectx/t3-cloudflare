import { getOptionalRequestContext } from "@cloudflare/next-on-pages";
import { drizzle } from "drizzle-orm/d1";

import { env } from "@/env";
import * as schema from "./schema";

function getDB() {
  /**
   * You can't access the DB binding when no request is being processed.
   */
  const DB = getOptionalRequestContext()?.env.DB ?? {};
  return DB as D1Database;
}

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn?: D1Database;
};

/**
 * NOTE: I am not using https://github.com/cloudflare/next-on-pages/tree/main/internal-packages/next-dev since it can't be called at the top level
 */
export const conn = globalForDb.conn ?? getDB();
if (env.NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(conn, { schema });
