import { Student } from "~/features/students/table/studentColumns";

const students: Student[] = [
    {
        imageUrl: "https://randomuser.me/api/portraits/men/11.jpg",
        name: "Rohan Mehta",
        email: "rohan.mehta@example.com",
    },
    {
        imageUrl: "https://randomuser.me/api/portraits/women/21.jpg",
        name: "Aisha Khan",
        email: "aisha.khan@example.com",
    },
    {
        imageUrl: "https://randomuser.me/api/portraits/men/31.jpg",
        name: "Arjun Verma",
        email: "arjun.verma@example.com",
    },
    {
        imageUrl: "https://randomuser.me/api/portraits/women/41.jpg",
        name: "Priya Sharma",
        email: "priya.sharma@example.com",
    },
    {
        imageUrl: "https://randomuser.me/api/portraits/men/51.jpg",
        name: "Karan Patel",
        email: "karan.patel@example.com",
    },
];

export default function ManageLibrarians() {
    return (
        <div className="w-full h-full p-8">
            <h1 className="mb-10 text-lg font-semibold">Manage Librarians</h1>
            {/* <DataTable columns={studentColumns} data={students} /> */}
        </div>
    );
}
