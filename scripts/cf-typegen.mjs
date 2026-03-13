import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const out = "cloudflare-env.d.ts";
const header = "// biome-ignore-all lint: third-party file\n";

execSync(`wrangler types --env-interface CloudflareEnv ${out}`, {
	stdio: "inherit",
});

const body = readFileSync(out, "utf8");
writeFileSync(out, header + body);
