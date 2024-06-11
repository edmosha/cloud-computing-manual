const INDEX = '/handbook'

interface RoleRoutes {
  articleCreate: string
  articleEdit: string
}

type Routes = {
  index: string
  login: string
  handbook: string
  article: string
  user: RoleRoutes
  admin: RoleRoutes
  guest: RoleRoutes
}

export const routes: Routes = {
  index: INDEX,
  login: '/login',
  handbook: '/handbook',
  article: '/handbook/articles/:articleId',

  user: {
    articleEdit: INDEX,
    articleCreate: INDEX,
  },
  admin: {
    articleEdit: '/handbook/articles/:articleId/edit',
    articleCreate: '/handbook/articles/create',
  },
  guest: {
    articleEdit: INDEX,
    articleCreate: INDEX,
  },
} as const
