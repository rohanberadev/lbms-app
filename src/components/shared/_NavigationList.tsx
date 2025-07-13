"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminNavLink, studentNavLink } from "~/constants";
import { cn } from "~/lib/utils";

export function NavigationList() {
    const pathname = usePathname();
    const navLinks = pathname.startsWith("/admin")
        ? adminNavLink
        : studentNavLink;

    return (
        <ul className="flex items-center gap-x-10">
            {navLinks.map((link, index) => (
                <li
                    key={index}
                    className={cn(
                        "text-sm hover:text-green-500 duration-300 transition-colors",
                        pathname.startsWith(link.href) ? "text-green-500" : ""
                    )}
                >
                    <Link href={link.href}>{link.label}</Link>
                </li>
            ))}
        </ul>
    );
}
