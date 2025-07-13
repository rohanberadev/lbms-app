export default function ClerkLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full h-screen flex justify-center items-center">
            {children}
        </main>
    );
}
