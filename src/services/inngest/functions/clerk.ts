import { NonRetriableError } from "inngest";
import { Webhook } from "svix";
import { env } from "~/data/env/server";
import { insertUser } from "~/features/users/db/user";
import { inngest } from "../client";

function verifyWebhook({
    raw,
    headers,
}: {
    raw: string;
    headers: Record<string, string>;
}) {
    return new Webhook(env.CLERK_WEBHOOK_SECRET).verify(raw, headers);
}

export const clerkCreateUser = inngest.createFunction(
    {
        id: "clerk/create-db-user",
        name: "Clerk - Create DB User",
    },
    { event: "clerk/user.created" },
    async ({ event, step }) => {
        await step.run("verify-webhook", async () => {
            try {
                verifyWebhook(event.data);
            } catch {
                throw new NonRetriableError("Invalid webhook");
            }
        });

        await step.run("create-user", async () => {
            const userData = event.data.data;
            const email = userData.email_addresses.find(
                (email) => email.id === userData.primary_email_address_id
            );

            if (email == null) {
                throw new NonRetriableError("No primary email address found");
            }

            await insertUser();
        });
    }
);
