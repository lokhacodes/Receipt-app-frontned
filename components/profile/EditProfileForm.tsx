"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, Loader2, Pencil } from "lucide-react";
import {
  FaEnvelope,
  FaKey,
  FaUser,
} from "react-icons/fa";
import { getProfile, updateProfile } from "@/lib/profileApi";

export default function EditProfileForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      const res = await getProfile();
      if (res.success !== false && res.user) {
        setName(res.user.name);
        setEmail(res.user.email);
      }
      setLoading(false);
    }
    fetchProfile();
  }, []);

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) {
      setError("Name and email are required.");
      return;
    }

    setSaving(true);
    setError("");

    const res = await updateProfile({ name, email });

    if (res.success === false) {
      setError(res.message || "Failed to update profile.");
      setSaving(false);
      return;
    }

    // Update the access token in localStorage with the new one
    if (res.accessToken) {
      localStorage.setItem("accessToken", res.accessToken);
    }

    setSaving(false);
    router.push("/dashboard/profile");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="animate-spin text-gray-400" size={24} />
      </div>
    );
  }

  return (
    <>
      <div className="profile-form">

        {/* Name */}

        <div className="profile-form-row profile-form-border">

          <div className="profile-form-left">

            <div className="profile-form-icon">

              <FaUser className="text-slate-500" />

            </div>

            <input
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="profile-form-input"
            />

          </div>

          <Pencil
            size={18}
            className="text-gray-400"
          />

        </div>

        {/* Email */}

        <div className="profile-form-row profile-form-border">

          <div className="profile-form-left">

            <div className="profile-form-icon">

              <FaEnvelope className="text-slate-500" />

            </div>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="profile-form-input"
            />

          </div>

          <Pencil
            size={18}
            className="text-gray-400"
          />

        </div>

        {/* Password */}

        <div className="profile-form-row">

          <div className="profile-form-left">

            <div className="profile-form-icon">

              <FaKey className="text-slate-500" />

            </div>

            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="profile-form-input"
            />

          </div>

          <ChevronRight
            size={18}
            className="text-gray-400"
          />

        </div>

      </div>

      {error && (
        <p className="text-red-500 text-sm text-center mb-3">{error}</p>
      )}

      <button
        className="profile-save-btn"
        onClick={handleSubmit}
        disabled={saving}
      >
        {saving ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="animate-spin" size={18} />
            Saving...
          </span>
        ) : (
          "Save"
        )}
      </button>
    </>
  );
}
