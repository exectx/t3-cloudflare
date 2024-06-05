import { getRequestContext } from "@cloudflare/next-on-pages";
import { drizzle } from "drizzle-orm/d1";

import { env } from "@/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  client?: D1Database;
};

export let client: D1Database | undefined;

export const db = () => {
  /**
   * Don't call getRequestContext() at the top level
   */
  client = globalForDb.client ?? getRequestContext().env.DB;
  if (env.NODE_ENV !== "production") globalForDb.client = client;
  return drizzle(client, { schema });
};
