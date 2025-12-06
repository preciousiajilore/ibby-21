import { useEffect, useRef } from "react";

export default function Modal({ open, onClose, item }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    // focus trap (basic)
    const prev = document.activeElement;
    panelRef.current?.focus();
    return () => { document.removeEventListener("keydown", onKey); prev?.focus(); };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur p-4"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="w-full max-w-lg outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="rounded-2xl overflow-hidden bg-white shadow-2xl ring-1 ring-black/5"
        >
          {item?.image && (
            <img
              src={item.image}
              alt={item.alt || ""}
              className="w-full max-h-72 object-cover"
              loading="lazy"
            />
          )}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-slate-700 leading-relaxed">{item.text}</p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
