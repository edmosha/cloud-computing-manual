import React, { PropsWithChildren } from 'react'
import { Divider } from '@mui/material'
import { DeleteOutline, EditOutlined, PostAddOutlined } from '@mui/icons-material'
import { IconButton } from 'shared/ui/icon-button'
import { useNavigate } from 'react-router-dom'
import { UserRoleEnum, useUserRole } from 'entities/user'

interface ThematicSectionProps extends PropsWithChildren {
  title: string
  id: string
}

export const ThematicSection = ({ children, title, id }: ThematicSectionProps) => {
  const navigate = useNavigate()

  const userRole = useUserRole()

  return (
    <div className={'flex flex-col gap-1'}>
      <div className={'flex items-center gap-1'}>
        <h2 className={'flex-1'}>{title}</h2>
        {userRole === UserRoleEnum.ADMIN && (
          <div className={'flex gap-2 mr-6'}>
            <IconButton tooltip={'Редактировать название'}>
              <EditOutlined />
            </IconButton>
            <IconButton
              tooltip={'Новая статья'}
              onClick={() => navigate('./articles/create', { state: { sectionId: id } })}
            >
              <PostAddOutlined />
            </IconButton>
            <IconButton
              tooltip={'Удалить'}
              onClick={() => {}}
            >
              <DeleteOutline className={'size-6'} />
            </IconButton>
          </div>
        )}
      </div>
      <Divider />
      <ul className={'flex flex-col gap-1 list-none p-1 m-0 ml-2'}>
        {children}
      </ul>
    </div>
  )
}