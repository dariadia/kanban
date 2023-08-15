export type ItemUuid = string
export interface Task extends BaseItem {
  inner: string
}  
export type Column = {
  selfUuid: ItemUuid
  title: string
}

export interface BaseItem {
  [x: string]: string | number | readonly string[] | undefined
  selfUuid: ItemUuid
  columnUuid: ItemUuid
}
