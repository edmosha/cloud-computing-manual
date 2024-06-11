import React, { ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { UserRoleEnum, useUserRole } from 'entities/user'

import { routes } from 'shared/lib/routes'

interface ManageRouteByRoleProps {
  requiredRoles: UserRoleEnum[]
  elements: {
    [UserRoleEnum.USER]: ReactNode
    [UserRoleEnum.ADMIN]: ReactNode
    [UserRoleEnum.GUEST]: ReactNode
  }
}

export const ManageRouteByRole = ({ requiredRoles, elements }: ManageRouteByRoleProps) => {
  const userRole = useUserRole()

  if (!requiredRoles.includes(userRole)) {
    return <Navigate to={routes.index} />
  }

  return elements[userRole]
}
