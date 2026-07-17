"use client";

import Link from "next/link";
import { Mail, Pencil, User } from "lucide-react";

export default function ProfileCard() {
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
              Partha
            </h1>

            <p className="profile-info-subtitle">
              parthadas@gmail.com
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
            parthadas@gmail.com
          </p>

        </div>

      </div>
    </div>
  );
}