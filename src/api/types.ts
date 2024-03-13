export interface IResponse<T> {
  code: number | string
  data: T
  msg: string
}
