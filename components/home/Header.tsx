"use client";

import { ArrowLeft, Bell, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  showBackButton?: boolean;
}

export default function Header({
  showBackButton = false,
}: HeaderProps) {
  const router = useRouter();

  return (
    <header className="home-header">

      <div className="home-header-left">

        {showBackButton && (
          <button
            onClick={() => router.back()}
            className="header-back-button"
          >
            <ArrowLeft size={22} />
          </button>
        )}

        <div>

          <h1 className="home-company">
            AnnaNovas IT LTD
          </h1>

          <p className="home-company-subtitle">
            Organization Tester P
          </p>

        </div>

      </div>

      <div className="home-actions">

        <button className="language-button">

          <span className="text-xl">
            🇬🇧
          </span>

          <span className="font-medium">
            EN
          </span>

          <ChevronDown size={16} />

        </button>

        <button className="notification-button">

          <Bell size={22} />

        </button>

      </div>

    </header>
  );
}