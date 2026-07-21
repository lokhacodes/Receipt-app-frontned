import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  gallery?: boolean;
  onClick: () => void;
}

export default function ReceiptOption({
  icon: Icon,
  title,
  gallery = false,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`receipt-option ${
        gallery
          ? "receipt-option-gallery"
          : ""
      }`}
    >
      <div
        className={`receipt-option-icon ${
          gallery
            ? "receipt-option-gallery-icon"
            : ""
        }`}
      >
        <Icon size={24} />
      </div>

      <span className="receipt-option-title">
        {title}
      </span>
    </button>
  );
}