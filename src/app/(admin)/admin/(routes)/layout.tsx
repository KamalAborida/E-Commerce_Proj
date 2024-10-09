import SideBar from '../../components/SideBar/SideBar';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="adminLayout">
      <SideBar />
      {children}
    </main>
  );
}
