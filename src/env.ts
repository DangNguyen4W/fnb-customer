import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";

export const env = createEnv({
  server: {
    SELF_DOMAIN: z.string(),
  },
  client: {},
  runtimeEnv: {
    SELF_DOMAIN: process.env.SELF_DOMAIN,
  },
});
