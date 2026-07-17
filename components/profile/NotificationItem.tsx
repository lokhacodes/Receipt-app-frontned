"use client";

import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  enabled: boolean;
  border?: boolean;
  onToggle: () => void;
}

export default function NotificationItem({
  icon: Icon,
  title,
  description,
  enabled,
  border = true,
  onToggle,
}: Props) {
  return (
    <div
      className={`notification-item ${
        border ? "notification-item-border" : ""
      }`}
    >
      <div className="notification-left">

        <div className="notification-icon">
          <Icon
            size={18}
            className="text-slate-500"
          />
        </div>

        <div>

          <h3 className="notification-title">
            {title}
          </h3>

          <p className="notification-subtitle">
            {description}
          </p>

        </div>

      </div>

      <button
        onClick={onToggle}
        className={`notification-toggle ${
          enabled
            ? "notification-toggle-on"
            : "notification-toggle-off"
        }`}
      >
        <span
          className={`notification-toggle-circle ${
            enabled
              ? "notification-toggle-circle-on"
              : "notification-toggle-circle-off"
          }`}
        />
      </button>
    </div>
  );
}