import { Navbar } from "~/components/shared/Navbar";

export default function StudentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <Navbar />
            <div className="lg:px-8 px-6 py-8">{children}</div>
        </main>
    );
}
