import { type Config } from "drizzle-kit";

const localDbPath = process.env.LOCAL_DB_PATH;

if (!localDbPath) {
  throw new Error(
    "LOCAL_DB_PATH is not set. Run `pnpm d1:migrate:local` first to create a local D1 database.",
  );
}

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: `file:${localDbPath}`,
  },
  tablesFilter: ["t3-cloudflare_*"],
} satisfies Config;
