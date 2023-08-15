export type Transaction = {
  uuid: string
  amount: number
  currency: string
  origin: string
  sender?: { name: string, accountNumber: number }
  status: 'complete' | 'pending' | 'failed'
}
