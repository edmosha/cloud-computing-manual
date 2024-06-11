import React, { PropsWithChildren } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IconButton } from 'shared/ui/icon-button'
import { DeleteOutline, EditNoteOutlined } from '@mui/icons-material'
import { UserRoleEnum, useUserRole } from 'entities/user'

interface ArticleItemProps extends PropsWithChildren {
  id: string,
  isWrited: boolean
}

export const ArticleItem = ({ children, id, isWrited }: ArticleItemProps) => {
  const navigate = useNavigate()

  const handleRedirectEditArticle = () => {
    navigate('/handbook/articles/' + id + '/edit')
    console.log('click')
  }

  const userRole = useUserRole()

  return (
    <li className={'group flex gap-2 items-center justify-between text-xl mr-4 min-h-9 hover:bg-orange-100 hover:bg-opacity-20'}>
      <Link to={'/handbook/articles/' + id}>
        {children}
      </Link>

      {userRole === UserRoleEnum.ADMIN && (
        <div className={'hidden gap-2 group-hover:flex'}>
          <IconButton
            tooltip={'Редактировать'}
            onClick={handleRedirectEditArticle}
          >
            <EditNoteOutlined/>
          </IconButton>
          <IconButton
            tooltip={'Удалить'}
            onClick={() => {
            }}
          >
            <DeleteOutline className={'size-5'}/>
          </IconButton>
        </div>
      )}

      {userRole === UserRoleEnum.USER && isWrited && (
        <div className={'bg-primary text-white rounded-xl text-sm px-2 py-1'}>
          Прочитано
        </div>
      )}

      {userRole === UserRoleEnum.USER && !isWrited && (
        <div className={'border border-primary text-primary rounded-xl text-sm px-2 py-1'}>
          Не рочитано
        </div>
      )}
    </li>
  )
}