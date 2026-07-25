"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Loader2, Mail, Pencil, User } from "lucide-react";
import { getProfile } from "@/lib/profileApi";

interface UserData {
  name: string;
  email: string;
}

export default function ProfileCard() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      const res = await getProfile();
      if (res.success !== false && res.user) {
        setUser(res.user);
      }
      setLoading(false);
    }
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="profile-card flex items-center justify-center py-8">
        <Loader2 className="animate-spin text-gray-400" size={24} />
      </div>
    );
  }

  return (
    <div className="profile-card">
      <div className="flex items-start justify-between">

        <div className="flex gap-4">

          <div className="profile-avatar">
            <User
              className="text-white"
              size={28}
            />
          </div>

          <div>

            <h1 className="profile-info-title">
              {user?.name || "User"}
            </h1>

            <p className="profile-info-subtitle">
              {user?.email || ""}
            </p>

          </div>

        </div>

        <Link href="/dashboard/profile/edit">

          <Pencil
            size={18}
            className="text-gray-500"
          />

        </Link>

      </div>

      <div className="profile-email">

        <div className="profile-icon-box">

          <Mail
            size={18}
            className="text-slate-500"
          />

        </div>

        <div>

          <p className="text-sm text-subtitle">
            Email
          </p>

          <p className="font-semibold text-text">
            {user?.email || ""}
          </p>

        </div>

      </div>
    </div>
  );
}
