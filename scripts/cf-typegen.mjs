import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const out = "cloudflare-env.d.ts";
const header = "// biome-ignore-all lint: third-party file\n";

execSync(`wrangler types --env-interface CloudflareEnv ${out}`, {
	stdio: "inherit",
});

const body = readFileSync(out, "utf8")
	.replace(
		/mainModule:\s*typeof import\("\.\/\.open-next\/worker"\);/,
		"mainModule: unknown;",
	)
	.replace(
		/WORKER_SELF_REFERENCE:\s*Service<\s*typeof import\("\.\/\.open-next\/worker"\)\.default\s*>;/s,
		"WORKER_SELF_REFERENCE: Service<any>;",
	);
writeFileSync(out, header + body);
