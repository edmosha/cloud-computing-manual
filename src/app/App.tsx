import React, { useEffect } from 'react'
import { Header } from 'widgets/header'
import { Outlet } from 'react-router-dom'
import { setUserRole, UserRoleEnum } from 'entities/user'

function App() {
  useEffect(() => {
    setUserRole(UserRoleEnum.USER)
  }, [])

  return (
    <>
      <Header/>
      <main className={'max-w-[940px] px-10 mx-auto my-16'}>
        <Outlet />
      </main>
    </>
  )
}

export default App
