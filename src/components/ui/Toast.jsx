import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Toast({ toasts, removeToast }) {
  return (
    <div
      aria-live="polite"
      className="fixed top-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={() => removeToast(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  )
}

function ToastItem({ toast, onRemove }) {
  useEffect(() => {
    const timer = setTimeout(onRemove, 4000)
    return () => clearTimeout(timer)
  }, [onRemove])

  const isSuccess = toast.type === 'success'

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 80, scale: 0.9 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="pointer-events-auto flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-xl max-w-sm"
      style={{
        background: isSuccess
          ? 'linear-gradient(135deg, rgba(15,30,15,0.95), rgba(10,25,10,0.98))'
          : 'linear-gradient(135deg, rgba(30,10,10,0.95), rgba(25,8,8,0.98))',
        border: `1px solid ${isSuccess ? 'rgba(37,211,102,0.3)' : 'rgba(255,80,80,0.3)'}`,
        boxShadow: isSuccess
          ? '0 8px 32px rgba(37,211,102,0.2)'
          : '0 8px 32px rgba(255,80,80,0.2)',
      }}
    >
      <span className="text-2xl flex-shrink-0">
        {isSuccess ? '✅' : '❌'}
      </span>
      <div className="flex-1">
        <p className="font-poppins text-sm font-semibold text-white">{toast.title}</p>
        {toast.message && (
          <p className="font-poppins text-xs text-gray-400 mt-0.5">{toast.message}</p>
        )}
      </div>
      <button
        onClick={onRemove}
        className="text-gray-500 hover:text-white transition-colors text-lg leading-none ml-2"
        aria-label="Close notification"
      >
        ×
      </button>
    </motion.div>
  )
}
