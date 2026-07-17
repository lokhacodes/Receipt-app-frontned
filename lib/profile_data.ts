import {
    Bell,
    CircleHelp,
    Settings,
} from "lucide-react";

export const profileMenu = [
    {
        icon: Bell,
        title: "Notifications",
        description: "Manage your preferences",
        href: "/dashboard/profile/notifications",
    },

    {
        icon: Settings,
        title: "Settings",
        description: "Currency, language & theme",
        href: "/dashboard/profile/settings",
    },

    {
        icon: CircleHelp,
        title: "Help & Support",
        description: "FAQ and Contact",
        href: "/dashboard/profile/help",
    },
];