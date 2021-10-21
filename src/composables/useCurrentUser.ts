type User = {
  id: number
  name: string
  email: string
}

export const useCurrentUser = () =>
  useState<User | null>("currentUser", () => null)
