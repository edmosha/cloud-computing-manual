import { StateCreator, create } from 'zustand'
import { PersistOptions, createJSONStorage, persist } from 'zustand/middleware'

export enum UserRoleEnum {
  USER = 'user',
  ADMIN = 'admin',
  GUEST = 'guest',
}

type State = {
  role: UserRoleEnum
}

type Persist = (
  config: StateCreator<State>,
  options: PersistOptions<State>
) => StateCreator<State>

export const useUserStore = create<State>()(
  (persist as Persist)(
    () => ({
      role: UserRoleEnum.GUEST,
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => window.localStorage),
    }
  )
)

export const useUserRole = () => useUserStore((state) => state.role)

export const useUserIsAuth = () => useUserStore((state) => (
  state.role === UserRoleEnum.GUEST)
)

export const setUserRole = (role: UserRoleEnum) => {
  useUserStore.setState({ role })
}
