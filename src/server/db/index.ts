import { type Client, createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { env } from "@/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  client: Client | undefined;
};

export let client: Client | undefined;

/**
 * Avoid starting connections during builds
 */
export const db = () => {
  client = globalForDb.client ?? createClient({ url: env.DATABASE_URL });
  if (env.NODE_ENV !== "production") globalForDb.client = client;
  return drizzle(client, { schema });
};
