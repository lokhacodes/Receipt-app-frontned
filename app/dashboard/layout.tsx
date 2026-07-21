import FooterNav from "../../components/common/FooterNav";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {children}

      <FooterNav />
    </div>
  );
}