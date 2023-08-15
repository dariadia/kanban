import { BaseItem } from "./board"

export interface Transaction extends BaseItem {
  amount: number
  currency: string
  origin: string
  sender?: string
}
