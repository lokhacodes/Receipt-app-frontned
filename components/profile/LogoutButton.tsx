import { LogOut } from "lucide-react";

export default function LogoutButton() {
  return (
    <button className="profile-logout">

      <LogOut size={18} />

      Logout

    </button>
  );
}