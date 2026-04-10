import { useState } from 'react'
import { CheckCircle, Info, AlertCircle, X } from 'lucide-react'
import { useAppStore } from '../../store/useAppStore'

export default function ToastContainer() {
  const { toasts, removeToast } = useAppStore()

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {toasts.map(toast => (
        <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  )
}

function ToastItem({ toast, onClose }: { toast: { id: string; message: string; type: string }; onClose: () => void }) {
  const [exiting, setExiting] = useState(false)

  const handleClose = () => {
    setExiting(true)
    setTimeout(onClose, 300)
  }

  const icons = { success: CheckCircle, info: Info, error: AlertCircle }
  const colors = {
    success: 'bg-white border-green-value text-green-text',
    info: 'bg-white border-primary text-primary',
    error: 'bg-white border-red-text text-red-text',
  }
  const Icon = icons[toast.type as keyof typeof icons] || Info

  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-md border shadow-card max-w-xs ${colors[toast.type as keyof typeof colors]} ${exiting ? 'toast-exit' : 'toast-enter'}`}>
      <Icon size={18} className="flex-shrink-0" />
      <span className="text-[14px] text-text-primary flex-1">{toast.message}</span>
      <button onClick={handleClose} className="text-text-secondary hover:text-text-primary">
        <X size={16} />
      </button>
    </div>
  )
}
