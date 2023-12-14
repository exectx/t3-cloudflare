import { type Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./migrations",
  // driver: "d1",
  // dbCredentials: {
  //   dbName: "d1-ai",
  //   wranglerConfigPath: "./wrangler.toml"
  // },
  tablesFilter: ["ai-nextjs_*"],
} satisfies Config;
