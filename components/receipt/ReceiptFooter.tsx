"use client";

interface Props {
  onRetake: () => void;
  onSubmit: () => void;
  onCancel: () => void;
  loading?: boolean;
}

export default function ReceiptFooter({
  onRetake,
  onSubmit,
  onCancel,
  loading = false,
}: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white px-4 py-4 shadow-lg border-blue-600">

      <div className="mx-auto flex max-w-md gap-3">

        {/* Re-Take */}

        <button
          onClick={onRetake}
          className="flex-1 rounded-lg border-2 border-blue-600 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
        >
          Re-Take
        </button>

        {/* Submit */}

        <button
          onClick={onSubmit}
          disabled={loading}
          className="flex-1 rounded-lg border-2 border-green-600 py-3 font-semibold text-green-600 transition hover:bg-green-50 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Submit"}
        </button>

        {/* Cancel */}

        <button
          onClick={onCancel}
          className="flex-1 rounded-lg border-2 border-red-500 py-3 font-semibold text-red-500 transition hover:bg-red-50"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}