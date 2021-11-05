type User = {
  id: number
  name: string
  email: string
}

export function useCurrentUser() {
  return useState<User | null>("currentUser", () => null)
}
