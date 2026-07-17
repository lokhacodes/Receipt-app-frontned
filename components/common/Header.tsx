"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
}

export default function PageHeader({ title }: Props) {
  const router = useRouter();

  return (
    <div className="page-header">
      <button
        onClick={() => router.back()}
        className="page-header-back"
      >
        <ArrowLeft
          size={22}
          className="text-gray-700"
        />
      </button>

      <h1 className="page-header-title">
        {title}
      </h1>
    </div>
  );
}