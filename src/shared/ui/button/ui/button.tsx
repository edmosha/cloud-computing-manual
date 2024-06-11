import React from 'react'
import { Button as MuiButton, ButtonBaseProps } from '@mui/material'
import { cn } from 'shared/lib/utils'

export const Button = ({ children, className, ...props }: ButtonBaseProps) => {
  return (
    <MuiButton
      className={cn(
        'bg-primary rounded-lg font-bold text-sm text-white px-4 py-2 normal-case hover:bg-opacity-80',
        className
      )}
      {...props}
    >
      {children}
    </MuiButton>
  )
}