import SideBar from '../../components/SideBar/SideBar';
// import TokenChecker from '../../components/TokenChecker/TokenChecker';

import dynamic from 'next/dynamic';

const TokenChecker = dynamic(
  () => import('../../components/TokenChecker/TokenChecker'),
  {
    ssr: false,
  }
);

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
