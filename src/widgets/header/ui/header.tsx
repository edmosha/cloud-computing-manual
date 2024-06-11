import React from 'react'
import { Menu as MenuIcon } from '@mui/icons-material'
import { IconButton, Avatar, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import { useUserRole } from 'entities/user'

export const Header = () => {
  const [auth, setAuth] = React.useState(true)

  const stringAvatar = (name: string) => {
    return {
      children: `${name.split(' ')[0][0]}`,
    }
  }

  const userRole = useUserRole()

  return (
    <header className='w-full bg-white flex py-4 px-5 items-center shadow rounded-b-lg gap-4'>
      <IconButton>
        <MenuIcon/>
      </IconButton>
      <Link className={'flex-1 text-xl uppercase text-primary'} to={'/handbook'}>
        Электронное пособие
      </Link>
      {auth && (
        <div>
          <Tooltip title="Open settings">
            <Avatar
              {...stringAvatar(userRole.toUpperCase())}
              alt="avatar"
              sx={{ bgcolor: 'primary' }}
              className={'size-11 rounded-full bg-primary'}
              onClick={() => {}}
            />
          </Tooltip>
        </div>
      )}

      {!auth && (
        <a className={'text-black hover:text-primary'}>Войти</a>
      )}
    </header>
  )
}