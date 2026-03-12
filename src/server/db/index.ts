import { getCloudflareContext } from "@opennextjs/cloudflare";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  db: ReturnType<typeof drizzle<typeof schema>> | undefined;
};

export const getDb = async () => {
  if (globalForDb.db) return globalForDb.db;

  const { env } = await getCloudflareContext({ async: true });
  const db = drizzle<typeof schema>(env.DB, { schema });

  if (process.env.NODE_ENV !== "production") globalForDb.db = db;
  return db;
};
