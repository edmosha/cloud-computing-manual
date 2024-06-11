import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'

type ProgressWidgetProps = {
  count: number
  allCount: number
}

export const ProgressWidget = ({count, allCount}: ProgressWidgetProps) => {
  const progress = Math.round(count / allCount * 100)

  return (
    <div className={'p-0.5 rounded-xl bg-gradient-to-r from-primary to-pink-500 bg-gradient-opacity-50 max-w-[450px]'}>
      <div className={'bg-white flex rounded-xl px-10 py-4 flex-col gap-6'}>
        <h2 className={'text-xl text-primary tracking-wide'}>
          Прогресс изучения материала
        </h2>
        <div className={'flex justify-between items-top'}>
          <div className={'flex flex-col gap-2'}>
            <p className={'text-lg font-bold text-gray-700'}>Прочитано:</p>
            <p className={'text-lg font-bold text-gray-700'}>
              {count} из {allCount}
            </p>
          </div>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={progress} size={70} />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="caption"
                component="div"
                color="text.secondary"
                className={'text-lg font-bold text-gray-700'}
              >{`${progress}%`}</Typography>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  )
}