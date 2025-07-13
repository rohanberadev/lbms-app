"use client";

import { useClerk } from "@clerk/nextjs";
import { LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useMobile } from "~/hooks/useMobile";
import { SignOutButton } from "~/services/clerk/components/AuthButton";

type User = {
    name: string;
    email: string;
    imageUrl: string;
};

export function UserButtonClient({ user }: { user: User }) {
    const isMobile = useMobile();
    const { openUserProfile } = useClerk();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <UserInfo user={user} />
            </DropdownMenuTrigger>
            <DropdownMenuContent
                sideOffset={4}
                align="end"
                side={isMobile ? "bottom" : "right"}
                className="min-w-64 max-w-80"
            >
                <DropdownMenuLabel>
                    <UserInfo user={user} withDetails={true} />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => openUserProfile()}>
                    <UserIcon className="mr-1" />
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/user-settings/profile">
                        <SettingsIcon className="mr-1" />
                        Settings
                    </Link>
                </DropdownMenuItem>
                <SignOutButton>
                    <DropdownMenuItem asChild>
                        <Link href="/user-settings/profile">
                            <LogOutIcon className="mr-1" />
                            Logout
                        </Link>
                    </DropdownMenuItem>
                </SignOutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function UserInfo({
    user,
    withDetails,
}: {
    user: User;
    withDetails?: boolean;
}) {
    const nameInitals = user.name
        .split(" ")
        .slice(0, 2)
        .map((str) => str[0])
        .join("");

    return (
        <div className="flex items-center gap-x-2">
            <Avatar className="rounded-lg size-8">
                <AvatarImage src={user.imageUrl} alt="user avatar" />
                <AvatarFallback className="uppercase bg-primary text-primary-foreground select-none">
                    {nameInitals}
                </AvatarFallback>
            </Avatar>
            {withDetails && (
                <div className="text-primary">
                    <p className="text-xs">{user.name}</p>
                    <p className="text-xs">{user.email}</p>
                </div>
            )}
        </div>
    );
}
