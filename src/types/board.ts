export type ItemUuid = string
export type Task = {
  selfUuid: ItemUuid
  columnId: ItemUuid
  inner: string
}  
export type Column = {
  selfUuid: ItemUuid
  title: string
}
