import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";

export const env = createEnv({
  server: {
    SELF_DOMAIN: z.string(),
    BE_DOMAIN_DOMAIN: z.string(),
    IMAGE_DOMAIN_DOMAIN: z.string(),
  },
  client: {},
  runtimeEnv: {
    SELF_DOMAIN: process.env.SELF_DOMAIN,
    BE_DOMAIN_DOMAIN: process.env.BE_DOMAIN_DOMAIN,
    IMAGE_DOMAIN_DOMAIN: process.env.IMAGE_DOMAIN_DOMAIN,
  },
});
