import { bookStatus } from "~/constants";
import { BookCard } from "~/features/books/components/BookCard";
import { BookSearch } from "~/features/books/components/BookSearch";

export default function BrowseBooks() {
    return (
        <>
            <div className="flex items-center justify-between mb-8">
                <BookSearch className="max-md:w-full" />
                {/* <FilterBookButton /> */}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 justify-center items-center">
                {Array.from({ length: 100 }).map((_, index) => (
                    <BookCard
                        badge={{
                            label: bookStatus.available.label,
                            styles: bookStatus.available.color,
                        }}
                        key={index}
                    />
                ))}
            </div>
        </>
    );
}
