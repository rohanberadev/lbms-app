import { DataTable } from "~/components/DataTable";
import { Book, bookColumns } from "~/features/books/tables/bookColumns";

const books: Book[] = [
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt & David Thomas",
        availableCopies: 5,
        totalCopies: 10,
        publisher: "Addison-Wesley",
        imageUrl:
            "https://m.media-amazon.com/images/I/41as+WafrFL._SX376_BO1,204,203,200_.jpg",
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        availableCopies: 2,
        totalCopies: 8,
        publisher: "Prentice Hall",
        imageUrl:
            "https://m.media-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg",
    },
    {
        title: "You Don't Know JS Yet",
        author: "Kyle Simpson",
        availableCopies: 3,
        totalCopies: 5,
        publisher: "Independently Published",
        imageUrl:
            "https://m.media-amazon.com/images/I/51loY8F3xFL._SX331_BO1,204,203,200_.jpg",
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        availableCopies: 6,
        totalCopies: 10,
        publisher: "Penguin",
        imageUrl:
            "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        title: "Deep Work",
        author: "Cal Newport",
        availableCopies: 4,
        totalCopies: 7,
        publisher: "Grand Central Publishing",
        imageUrl:
            "https://m.media-amazon.com/images/I/41k+5FRCG1L._SX331_BO1,204,203,200_.jpg",
    },
];

export default function BooksOverview() {
    return (
        <div className="w-full h-full p-8">
            <h1 className="mb-10 text-lg font-semibold">Manage Books</h1>
            <DataTable columns={bookColumns} data={books} />
        </div>
    );
}
