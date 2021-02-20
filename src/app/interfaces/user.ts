export interface User {
  id: string
  first_name: string
  last_name: string
  email: string
  gender: string
  image: string
}

export interface UserAuth {
  email: string
  password: string
}
