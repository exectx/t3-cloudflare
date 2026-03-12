/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

import "./src/env.js";

if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}

/** @type {import("next").NextConfig} */
const config = {};

export default config;
