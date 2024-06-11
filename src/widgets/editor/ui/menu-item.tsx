import React, { ReactNode } from 'react'
import { cn } from 'shared/lib'

export type Item = {
  icon: ReactNode
  title: string
  action: () => void
  isActive?: (() => boolean) | null
}

export const MenuItem = ({icon, title, action, isActive = null}: Item) => {
  return (
    <button
      className={cn()}
      onClick={action}
      title={title}
      type={'button'}
    >
      {icon}
    </button>
  )
}