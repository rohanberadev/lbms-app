import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";

export function BookCard({
    badge,
}: {
    badge?: { label: string; styles: string };
}) {
    return (
        <div className="w-full flex flex-col gap-1 relative">
            <div className="w-full xl:h-[300px] lg:h-[350px] md:h-[375px] h-[300px] border-1"></div>
            {badge && (
                <Badge className={cn("absolute top-2 left-2", badge.styles)}>
                    {badge.label}
                </Badge>
            )}
            <div className="flex flex-col">
                <Link
                    href=""
                    className="text-sm text-gray-800 cursor-pointer hover:underline"
                >
                    Introduction to Algorithms
                </Link>
                <span className="text-xs text-gray-600">
                    Author: Rohan Bera
                </span>
                <span className="text-xs text-gray-600">Category: Science</span>
                <span className="text-xs text-gray-400">
                    Total: 10 | Available: 8
                </span>
            </div>
        </div>
    );
}
