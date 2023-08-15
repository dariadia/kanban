import { BaseItem } from "./board"

export interface Transaction extends BaseItem {
  amount: number
  currency: string
  origin: string
  sender?: string
}

export type CounterData = { 
  totalTransactions: Transaction[], 
  influx?: number, 
  failed?: number, 
  complete?: number, 
  pending?: number 
}
