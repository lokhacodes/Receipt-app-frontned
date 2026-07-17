import PageHeader from "../../../../components/common/Header";
import NotificationList from "../../../../components/profile/NotificationList";

export default function NotificationPage() {
  return (
    <main className="profile-page">

      <PageHeader title="Notification" />

      <NotificationList />

    </main>
  );
}