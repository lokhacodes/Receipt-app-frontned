import AvatarUploader from "@/components/profile/AvatarUploader";
import EditProfileForm from "@/components/profile/EditProfileForm";
import PageHeader from "@/components/common/Header";

export default function EditProfilePage() {
  return (
    <main className="profile-page">

      <PageHeader title="Edit" />

      <AvatarUploader />

      <EditProfileForm />

    </main>
  );
}