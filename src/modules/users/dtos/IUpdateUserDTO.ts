interface IUpdateUserDTO {
  id: string
  data: {
    name?: string
    email?: string
    password?: string
  }
}

export { IUpdateUserDTO }