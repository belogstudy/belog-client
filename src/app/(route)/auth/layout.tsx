export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-screen h-screen bg-black">{children}</div>;
}
