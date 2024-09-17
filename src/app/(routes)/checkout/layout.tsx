export default function checkoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="checkoutLayout">{children}</main>;
}
