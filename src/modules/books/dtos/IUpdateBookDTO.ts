interface IUpdateBookDTO {
  id: string,
  data: {
    condition: string,
    edition: number,
    institution_id: string
  }
}

export { IUpdateBookDTO }