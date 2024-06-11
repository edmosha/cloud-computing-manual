import React from 'react'
import { IconButton as MuiButton, ButtonBaseProps, Tooltip } from '@mui/material'
import { cn } from 'shared/lib/utils'

interface IconButtonProps extends ButtonBaseProps {
  tooltip?: string
  className?: string
}

export const IconButton = ({ children, tooltip, className, onClick }: IconButtonProps) => {
  if (tooltip) {
    return (
      <Tooltip title={tooltip} enterDelay={500} enterNextDelay={500}>
        <MuiButton
          className={cn(
          'hover:bg-primary hover:bg-opacity-10 rounded-lg size-8 hover:text-primary-dark',
          className
        )}
          onClick={onClick}
        >
          {children}
        </MuiButton>
      </Tooltip>
    )
  } else {
    return (
      <MuiButton
        className={cn(
        'hover:bg-primary hover:bg-opacity-10 rounded-lg size-8 hover:text-primary-dark',
        className
      )}
        onClick={onClick}
      >
        {children}
      </MuiButton>
    )
  }
}