import ProfileMenuItem from "./ProfileMenuItem";
import { profileMenu } from "@/lib/profile_data";

export default function ProfileMenu() {
    return (
        <div className="profile-menu">
            {profileMenu.map((item, index) => (
                <ProfileMenuItem
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    border={index !== profileMenu.length - 1}
                />
            ))}
        </div>
    );
}