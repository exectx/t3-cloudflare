import { type Config } from "drizzle-kit";

import { env } from "~/env";

const hasRemoteCredentials =
  !!env.CLOUDFLARE_ACCOUNT_ID &&
  !!env.CLOUDFLARE_D1_DATABASE_ID &&
  !!env.CLOUDFLARE_TOKEN;

const isRemoteCommand = ["push", "migrate", "studio", "check"].some((command) =>
  process.argv.includes(command),
);

if (isRemoteCommand && !hasRemoteCredentials) {
  throw new Error(
    "CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_D1_DATABASE_ID, and CLOUDFLARE_TOKEN are required for remote Drizzle commands.",
  );
}

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: env.CLOUDFLARE_ACCOUNT_ID ?? "sk_invalid",
    databaseId: env.CLOUDFLARE_D1_DATABASE_ID ?? "sk_invalid",
    token: env.CLOUDFLARE_TOKEN ?? "sk_invalid",
  },
  tablesFilter: ["t3-cloudflare_*"],
} satisfies Config;
