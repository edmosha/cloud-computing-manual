import React, { PropsWithChildren } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IconButton } from 'shared/ui/icon-button'
import { DeleteOutline, EditNoteOutlined } from '@mui/icons-material'

interface ArticleItemProps extends PropsWithChildren {
  id: string,
}

export const ArticleItem = ({ children, id }: ArticleItemProps) => {
  const navigate = useNavigate()

  const handleRedirectEditArticle = () => {
    navigate('/handbook/articles/' + id + '/edit')
    console.log('click')
  }

  return (
    <li className={'group flex gap-2 items-center justify-between text-xl mr-4 min-h-9 hover:bg-orange-100 hover:bg-opacity-20'}>
      <Link to={'/handbook/articles/' + id}>
        {children}
      </Link>

      <div className={'hidden gap-2 group-hover:flex'}>
        <IconButton
          tooltip={'Редактировать'}
          onClick={handleRedirectEditArticle}
        >
          <EditNoteOutlined />
        </IconButton>
        <IconButton
          tooltip={'Удалить'}
          onClick={() => {}}
        >
          <DeleteOutline className={'size-5'} />
        </IconButton>
      </div>
    </li>
  )
}