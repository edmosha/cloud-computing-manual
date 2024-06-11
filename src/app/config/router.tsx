import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from 'app/App.tsx'
import { ArticleAdminPage } from 'pages/article-admin-page'
import { ManageRouteByRole, RoleGuard } from 'features/auth'
import { UserRoleEnum } from 'entities/user'
import { routes } from 'shared/lib'
import { HandbookAdminPage } from 'pages/handbook-admin-page'
import { ArticlePage } from 'src/pages/article-page'
import { CreateArticleAdminPage } from 'pages/create-article-admin-page'
import { HandbookUserPage } from 'pages/handbook-user-page'

const ALL_SUCCESS = [UserRoleEnum.USER, UserRoleEnum.ADMIN, UserRoleEnum.GUEST]

export const Router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <div>Error</div>,

    children: [
      {
        path: routes.handbook,
        element: <ManageRouteByRole
          requiredRoles={ALL_SUCCESS}
          elements={{
            [UserRoleEnum.USER]: <HandbookUserPage />,
            [UserRoleEnum.ADMIN]: <HandbookAdminPage />,
            [UserRoleEnum.GUEST]: <div>User handbook page</div>,
          }}
        />,
      },
      {
        path: routes.article,
        element: <ManageRouteByRole
          requiredRoles={ALL_SUCCESS}
          elements={{
            [UserRoleEnum.USER]: <ArticlePage />,
            [UserRoleEnum.ADMIN]: <ArticlePage />,
            [UserRoleEnum.GUEST]: <ArticlePage />,
          }}
        />,
      },
      {
        element: <RoleGuard requiredRole={UserRoleEnum.ADMIN} />,
        children: [
          {
            path: routes.admin.articleEdit,
            element: <ArticleAdminPage />
          },
          {
            path: routes.admin.articleCreate,
            element: <CreateArticleAdminPage />
          },
        ]
      },
    ]
  }
])