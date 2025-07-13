import { BookPlusIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { BookCard } from "~/features/books/components/BookCard";
import { BookFilterForm } from "~/features/books/components/BookFilterForm";
import { BookSearch } from "~/features/books/components/BookSearch";

export default function ReserveBooksPage() {
    const selectItems = [
        { label: "All Borrowed Books", value: "all-borrowed" },
        { label: "Currently Borrowed", value: "currently-borrowed" },
        { label: "Overdue Books", value: "overdue" },
    ];

    return (
        <>
            <div className="w-full flex mb-8 justify-between items-center">
                <BookSearch />

                <div className="flex items-center gap-x-4">
                    <BookFilterForm selectItems={selectItems} />

                    <Button variant="default" className="flex items-center">
                        <span className="max-sm:hidden">Reserve Book</span>
                        <BookPlusIcon />
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 justify-center items-center">
                {Array.from({ length: 100 }).map((_, index) => (
                    <BookCard
                        badge={{
                            label: "Active",
                            styles: "bg-green-200 text-green-800",
                        }}
                        key={index}
                    />
                ))}
            </div>
        </>
    );
}
