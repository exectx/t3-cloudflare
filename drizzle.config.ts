import { spawnSync } from "node:child_process";
import { readdirSync } from "node:fs";
import path from "node:path";
import { defineConfig } from "drizzle-kit";
import { env } from "~/env";

const prod = env.NODE_ENV === "production";

const schema = "./src/server/db/schema.ts";
const tablesFilter = ["t3-cloudflare_*"];

let sqliteDbFile = "";
if (!prod) {
	const dir = path.join(
		".wrangler",
		"state",
		"v3",
		"d1",
		"miniflare-D1DatabaseObject",
	);
	let file = readdirSync(dir).find((f) => f.endsWith(".sqlite"));
	if (!file) {
		console.warn(
			"\n\n\n",
			"No .sqlite file found, querying prod-d1 to generate local sqlite files\n",
			"Attempting to run: wrangler d1 execute prod-d1 --local --command=\"SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;\"",
			"Re-run this script after the command completes successfully",
		);
		const wrangler = spawnSync(
			"wrangler",
			[
				"d1",
				"execute",
				"prod-d1",
				"--local",
				"--command=\"SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;\"",
			],
			{
				stdio: ["pipe", "inherit", "inherit"],
			},
		);
		if (wrangler.status !== 0) {
			process.exit(wrangler.status);
		}
		file = readdirSync(dir).find((f) => f.endsWith(".sqlite"));
	}
	if (!file) {
		throw new Error(
			"Failed to find a local D1 sqlite file. Run `wrangler d1 execute prod-d1 --local` to initialize local state.",
		);
	}
	sqliteDbFile = path.join(dir, file);
}

if (prod) {
	const hasRemoteCredentials =
		!!env.CLOUDFLARE_ACCOUNT_ID &&
		!!env.CLOUDFLARE_D1_DATABASE_ID &&
		!!env.CLOUDFLARE_TOKEN;
	if (!hasRemoteCredentials) {
		throw new Error(
			"CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_D1_DATABASE_ID, and CLOUDFLARE_TOKEN are required for remote Drizzle commands.",
		);
	}
}

export default !prod
	? defineConfig({
			schema,
			dialect: "sqlite",
			dbCredentials: {
				url: sqliteDbFile,
			},
			tablesFilter,
		})
	: defineConfig({
			schema,
			dialect: "sqlite",
			driver: "d1-http",
			dbCredentials: {
				accountId: env.CLOUDFLARE_ACCOUNT_ID ?? "",
				databaseId: env.CLOUDFLARE_D1_DATABASE_ID ?? "",
				token: env.CLOUDFLARE_TOKEN ?? "",
			},
			tablesFilter,
		});
