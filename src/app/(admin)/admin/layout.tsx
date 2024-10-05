export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="adminLayout">
      <h1>Admin Layout</h1>
      {children}
    </main>
  );
}
