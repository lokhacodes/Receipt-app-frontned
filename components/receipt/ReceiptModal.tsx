"use client";

import { Camera, Image, X } from "lucide-react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import ReceiptOption from "./ReceiptOption";
import { ReceiptData } from "@/types/receipt";

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

  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string>();

  if (!open) return null;

  const handleImage = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const file = e.target.files?.[0];

      if (!file) return;

      // Preview (optional)
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);

      setLoading(true);

      const formData = new FormData();
      formData.append("receipt", file);

      const token = localStorage.getItem("accessToken");

if (!token) {
  alert("Please login again.");
  router.push("/");
  return;
}

      const response = await fetch(
        "http://localhost:4001/api/receipts/scan",
        {
          method: "POST",
           headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("OCR Failed");
      }

      const data: ReceiptData = await response.json();

      // Save OCR result
      localStorage.setItem(
        "receipt",
        JSON.stringify(data)
      );

      // Optional: save preview image
      localStorage.setItem("receiptImage", imageUrl);

      onClose();

      router.push("/dashboard/expense/review");
      // or:
      // router.push("/dashboard/expense/create-expense");

    } catch (error) {
      console.error(error);
      alert("Unable to scan receipt");
    } finally {
      setLoading(false);

      // Allow selecting the same image again
      e.target.value = "";
    }
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
            onClick={() => cameraInput.current?.click()}
          />

          <div className="receipt-divider">
            <span>or</span>
          </div>

          <ReceiptOption
            icon={Image}
            title="Choose from Gallery"
            gallery
            onClick={() => galleryInput.current?.click()}
          />

        </div>

        {preview && (
          <img
            src={preview}
            alt="Receipt Preview"
            className="mt-4 rounded border"
          />
        )}

        {loading && (
          <p className="mt-4 text-center">
            Reading receipt...
          </p>
        )}

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