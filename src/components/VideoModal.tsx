"use client";

import { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
        >
          <i className="bi bi-x-lg text-xl"></i>
        </button>
        <div className="aspect-video overflow-hidden rounded-xl bg-black">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
