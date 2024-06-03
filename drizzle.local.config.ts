import { type Config } from "drizzle-kit";

import { env } from "@/env";

if (!env.LOCAL_DB_PATH) {
  throw new Error("LOCAL_DB_PATH is required, path to local sqlite database");
}

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env.LOCAL_DB_PATH,
  },
  tablesFilter: [`t3-cloudflare_*`],
} satisfies Config;
