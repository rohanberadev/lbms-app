import { UserButton } from "~/features/users/UserButton";
import { SignedIn } from "~/services/clerk/components/SignInStatus";
import { NavigationList } from "./_NavigationList";

export function Navbar() {
    return (
        <nav className="w-full h-16 flex items-center px-8 border-1 justify-between">
            <h1 className="text-lg font-semibold">LBMS</h1>

            <NavigationList />

            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    );
}
