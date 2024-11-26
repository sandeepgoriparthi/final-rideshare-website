"use client"

import * as React from "react"
import { toast } from "sonner"

export function useToast() {
  return {
    toast: (props: {
      title?: string
      description?: string
      action?: React.ReactNode
      cancel?: React.ReactNode
      onAction?: () => void
      onCancel?: () => void
    }) => {
      toast(props.title, {
        description: props.description,
        action: props.action,
        cancel: props.cancel,
        onAction: props.onAction,
        onCancel: props.onCancel,
      })
    },
  }
}