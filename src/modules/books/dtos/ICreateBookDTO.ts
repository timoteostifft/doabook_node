interface ICreateBookDTO {
  name: string
  edition: number
  year: number
  launch: Date
  condition: string
  quantity: number
  institution_id: string
}

export { ICreateBookDTO }