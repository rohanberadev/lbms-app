"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
    EyeIcon,
    MoreHorizontalIcon,
    PencilIcon,
    Trash2Icon,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { BookTable as BookPgTable } from "~/drizzle/schema";

export type Book = Partial<typeof BookPgTable.$inferSelect> & {
    index?: number;
};

export const bookColumns: ColumnDef<Book>[] = [
    {
        accessorKey: "index",
        header: "Sr No",
        cell: ({ row }) => {
            return row.index + 1;
        },
    },
    {
        accessorKey: "imageUrl",
        header: "Image",
        cell: ({ row }) => {
            const imageUrl = row.getValue("imageUrl") as string;
            return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={imageUrl}
                    alt={row.getValue("title")}
                    className="w-20 h-30"
                />
            );
        },
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "author",
        header: "Author",
    },
    {
        accessorKey: "publisher",
        header: "Publisher",
    },
    {
        accessorKey: "availableCopies",
        header: "Available Copies",
    },
    {
        accessorKey: "totalCopies",
        header: "Total Copies",
    },
    {
        id: "actions",
        header: "Actions",
        enableHiding: false,
        cell: () => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="size-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontalIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <EyeIcon />
                            View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <PencilIcon />
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">
                            <Trash2Icon color="red" />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
