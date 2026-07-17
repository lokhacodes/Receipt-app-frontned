export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#F6F8FD]">
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          {children}
        </div>
      </div>
    </main>
  );
}