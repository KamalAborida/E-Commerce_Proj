import SideBar from '../../components/SideBar/SideBar';
import TokenChecker from '../../components/TokenChecker/TokenChecker';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="adminLayout">
      <TokenChecker />
      <SideBar />
      {children}
    </main>
  );
}
