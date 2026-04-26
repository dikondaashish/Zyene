"use client"

type ScheduleCallModalProps = {
  open: boolean
  onClose: () => void
  scheduleCallUrl: string
  title: string
}

export function ScheduleCallModal({ open, onClose, scheduleCallUrl, title }: ScheduleCallModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-[960px] h-[80vh] bg-white rounded-xl overflow-hidden shadow-2xl">
        <button
          type="button"
          aria-label="Close scheduling popup"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
          onClick={onClose}
        >
          ×
        </button>
        <iframe
          src={scheduleCallUrl}
          title={title}
          className="w-full h-full border-0"
          allow="camera; microphone; autoplay; encrypted-media; fullscreen"
        />
      </div>
    </div>
  )
}
