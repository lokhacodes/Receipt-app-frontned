"use client";

import { Camera } from "lucide-react";

export default function AvatarUploader() {
  return (
    <div className="profile-avatar-card">

      <div className="profile-avatar-wrapper">

        <div className="profile-avatar-image-wrapper">

          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Profile"
            className="profile-avatar-image"
          />

          <button className="profile-camera-button">
            <Camera size={16} />
          </button>

        </div>

      </div>

    </div>
  );
}