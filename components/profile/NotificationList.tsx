"use client";

import { useState } from "react";

import {
  Bell,
  Calendar,
  Rocket,
  Shield,
} from "lucide-react";

import NotificationItem from "./NotificationItem";

export default function NotificationList() {
  const [notifications, setNotifications] =
    useState([
      {
        id: 1,
        title: "Messages",
        description:
          "Receive message notifications",
        enabled: true,
        icon: Bell,
      },
      {
        id: 2,
        title: "Reminders",
        description:
          "Upcoming expense reminders",
        enabled: false,
        icon: Calendar,
      },
      {
        id: 3,
        title: "Security",
        description:
          "Account and login alerts",
        enabled: false,
        icon: Shield,
      },
      {
        id: 4,
        title: "Updates",
        description:
          "App news and new features",
        enabled: true,
        icon: Rocket,
      },
    ]);

  const toggleNotification = (id: number) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              enabled: !item.enabled,
            }
          : item
      )
    );
  };

  return (
    <>
      <p className="notification-description">
        Manage your notification preferences.
      </p>

      <div className="notification-card">

        {notifications.map((item, index) => (
          <NotificationItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            enabled={item.enabled}
            border={
              index !== notifications.length - 1
            }
            onToggle={() =>
              toggleNotification(item.id)
            }
          />
        ))}

      </div>
    </>
  );
}