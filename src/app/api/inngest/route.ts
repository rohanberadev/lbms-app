import { serve } from "inngest/next";
import { inngest } from "~/services/inngest/client";

export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [],
});
