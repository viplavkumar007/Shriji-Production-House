import { useState, useCallback } from 'react'

let idCounter = 0

export function useToast() {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback(({ type = 'success', title, message }) => {
    const id = ++idCounter
    setToasts((prev) => [...prev, { id, type, title, message }])
  }, [])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return { toasts, addToast, removeToast }
}
