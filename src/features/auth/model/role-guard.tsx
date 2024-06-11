import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { UserRoleEnum, useUserRole } from 'entities/user'

import { routes } from 'shared/lib/routes'

type RoleGuardProps = {
  requiredRole: UserRoleEnum
}

export const RoleGuard = ({ requiredRole }: RoleGuardProps) => {
  const userRole = useUserRole()
  console.log(userRole, requiredRole)
  if (userRole !== requiredRole) {
    return <Navigate to={routes.index} />
  }

  return <Outlet />
}
