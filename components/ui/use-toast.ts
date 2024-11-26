"use client"

import { toast } from "sonner"

export interface ToastProps {
  title?: string
  description?: string
  action?: React.ReactNode
  cancel?: React.ReactNode
  onAction?: () => void
  onCancel?: () => void
}

export function useToast() {
  return {
    toast: ({ title, description, action, cancel, onAction, onCancel }: ToastProps) => {
      toast(title, {
        description,
        action,
        cancel,
        onAction,
        onCancel,
      })
    },
  }
}