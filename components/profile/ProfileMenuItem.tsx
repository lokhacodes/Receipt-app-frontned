import Link from "next/link";
import { ChevronRight, LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  border?: boolean;
}

export default function ProfileMenuItem({
  icon: Icon,
  title,
  description,
  href,
  border = true,
}: Props) {
  return (
    <Link
      href={href}
      className={`profile-menu-item ${
        border ? "border-b border-border" : ""
      }`}
    >
      <div className="profile-menu-left">

        <div className="profile-menu-icon">
          <Icon
            size={18}
            className="text-slate-500"
          />
        </div>

        <div>

          <p className="profile-menu-title">
            {title}
          </p>

          <p className="profile-menu-description">
            {description}
          </p>

        </div>

      </div>

      <ChevronRight className="text-gray-400" />
    </Link>
  );
}