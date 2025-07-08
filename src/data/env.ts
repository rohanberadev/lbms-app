import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const server = createEnv({
    server: {
        CLERK_SECRET_KEY: z.string().min(1),
    },

    runtimeEnv: {
        CLERK_SECRET_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
});
