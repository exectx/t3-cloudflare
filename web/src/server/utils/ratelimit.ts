import { env } from "@/env";
import { Ratelimit } from "@unkey/ratelimit";

export const unkey = () =>
  new Ratelimit({
    rootKey: env.UNKEY_ROOT_KEY,
    namespace: "t3-app-cf-template",
    limit: 10,
    duration: "30s",
    async: true,
  });
