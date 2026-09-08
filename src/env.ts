import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";

export const env = createEnv({
  server: {
    SERVER_DOMAIN: z.string(),
  },
  client: {},
  runtimeEnv: {
    SERVER_DOMAIN: process.env.SERVER_DOMAIN,
  },
});
