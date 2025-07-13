import {
    SignInButton as ClerkSignInButton,
    SignOutButton as ClerkSignOutButton,
    SignUpButton as ClerkSignUpButton,
} from "@clerk/nextjs";
import { ComponentProps } from "react";
import { Button } from "~/components/ui/button";

export function SignUpButton({
    children = <Button>Sign Up</Button>,
    ...props
}: ComponentProps<typeof ClerkSignUpButton>) {
    return <ClerkSignUpButton {...props}>{children}</ClerkSignUpButton>;
}

export function SignInButton({
    children = <Button>Sign In</Button>,
    ...props
}: ComponentProps<typeof ClerkSignInButton>) {
    return <ClerkSignInButton {...props}>{children}</ClerkSignInButton>;
}

export function SignOutButton({
    children = <Button>Sign Out</Button>,
    ...props
}: ComponentProps<typeof ClerkSignOutButton>) {
    return <ClerkSignOutButton {...props}>{children}</ClerkSignOutButton>;
}
