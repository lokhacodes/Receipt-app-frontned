import ProfileCard from "@/components/profile/ProfileCard";
import ProfileMenu from "@/components/profile/ProfileMenu";
import LogoutButton from "@/components/profile/LogoutButton";

export default function ProfilePage() {
  return (
    <main className="profile-page">

      <ProfileCard />

      <ProfileMenu />

      <LogoutButton />

    </main>
  );
}