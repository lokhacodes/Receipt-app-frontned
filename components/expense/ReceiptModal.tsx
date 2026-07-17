"use client";

import { Camera, Image, X } from "lucide-react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

import ReceiptOption from "./ReceiptOption";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ReceiptModal({
  open,
  onClose,
}: Props) {
  const router = useRouter();

  const cameraInput = useRef<HTMLInputElement>(null);
  const galleryInput = useRef<HTMLInputElement>(null);

  if (!open) return null;

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    sessionStorage.setItem(
      "receiptImage",
      imageUrl
    );

    onClose();

    router.push("/dashboard/expense/create-expense");
  };

  return (
    <div className="modal-overlay">

      <div className="receipt-modal">

        <div className="receipt-modal-header">

          <h2 className="receipt-modal-title">
            Scan Receipt
          </h2>

          <button
            className="receipt-close"
            onClick={onClose}
          >
            <X size={20} />
          </button>

        </div>

        <div className="receipt-options">

          <ReceiptOption
            icon={Camera}
            title="Take Photo"
            onClick={() =>
              cameraInput.current?.click()
            }
          />

          <div className="receipt-divider">
            <span>or</span>
          </div>

          <ReceiptOption
            icon={Image}
            title="Choose from Gallery"
            gallery
            onClick={() =>
              galleryInput.current?.click()
            }
          />

        </div>

        <input
          ref={cameraInput}
          hidden
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImage}
        />

        <input
          ref={galleryInput}
          hidden
          type="file"
          accept="image/*"
          onChange={handleImage}
        />

      </div>

    </div>
  );
}