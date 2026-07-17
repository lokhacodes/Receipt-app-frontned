"use client";

import { useState } from "react";
import { ChevronRight, Pencil } from "lucide-react";
import {
  FaEnvelope,
  FaKey,
  FaUser,
} from "react-icons/fa";

export default function EditProfileForm() {
  const [name, setName] = useState("Partha");

  const [email, setEmail] = useState(
    "parthadas@gmail.com"
  );

  const [password, setPassword] = useState("");

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

      <button className="profile-save-btn">
        Save
      </button>
    </>
  );
}