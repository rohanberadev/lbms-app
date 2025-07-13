export const studentNavLink = [
    { label: "Browse Books", href: "/students/browse-books" },
    { label: "Borrow Books", href: "/students/borrow-books" },
    { label: "Reserve Books", href: "/students/reserve-books" },
    { label: "Fine Details", href: "/students/fines" },
    { label: "Reading History", href: "/students/reading-history" },
] as const;

export const adminNavLink = [
    { label: "Dashboard", href: "/admin/dashboard" },
    { label: "Books", href: "/admin/books" },
    { label: "Students", href: "/admin/students" },
    { label: "Librarians", href: "/admin/librarians" },
    { label: "All Users", href: "/admin/all-users" },
    { label: "System Settings", href: "/admin/settings" },
] as const;

export const bookStatus = {
    requested: {
        label: "Requested",
        color: "bg-yellow-200 text-yellow-800",
    },
    issued: {
        label: "Issued",
        color: "bg-green-200 text-green-800",
    },
    cancelled: {
        label: "Cancelled",
        color: "bg-red-200 text-red-800",
    },
    fulfilled: {
        label: "Returned",
        color: "bg-blue-200 text-blue-800",
    },
    available: {
        label: "Available",
        color: "bg-emerald-200 text-emerald-800",
    },
    unavailable: {
        label: "Unavailable",
        color: "bg-gray-200 text-gray-800",
    },
    late: {
        label: "Overdue",
        color: "bg-orange-200 text-orange-800",
    },
} as const;
