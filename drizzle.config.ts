import { type Config } from "drizzle-kit";

import { env } from "@/env";

/**
 * It's not necessary to have valid the CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_D1_DATABASE_ID, and CLOUDFLARE_TOKEN
 * to generate migrations
 */

export default {
  schema: "./src/server/db/schema.ts",
  out: "./migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: [`t3-cloudflare_*`],
} satisfies Config;
