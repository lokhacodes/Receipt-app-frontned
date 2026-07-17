"use client";

import { LucideIcon } from "lucide-react";

interface QuickActionCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  iconStyle: "primary" | "secondary";
  primary?: boolean;
  onClick: () => void;
}

export default function QuickActionCard({
  icon: Icon,
  title,
  subtitle,
  iconStyle,
  primary = false,
  onClick,
}: QuickActionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`quick-action-card ${
        primary ? "quick-action-card-primary" : ""
      }`}
    >
      <div
        className={`quick-action-icon ${
          iconStyle === "primary"
            ? "quick-action-icon-primary"
            : "quick-action-icon-secondary"
        }`}
      >
        <Icon size={24} />
      </div>

      <div className="text-left">
        <h3 className="quick-action-title">{title}</h3>

        <p className="quick-action-subtitle">{subtitle}</p>
      </div>
    </button>
  );
}