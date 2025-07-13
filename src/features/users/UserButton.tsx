import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import { UserButtonClient } from "./_UserButtonClient";

export function UserButton() {
    return (
        <Suspense>
            <UserSuspense />
        </Suspense>
    );
}

async function UserSuspense() {
    const { userId } = await auth();

    return (
        <UserButtonClient
            user={{
                email: "rohan@example.com",
                name: "Rohan Bera",
                imageUrl: "",
            }}
        />
    );
}
