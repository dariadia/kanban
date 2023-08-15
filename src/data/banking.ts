import { Column } from "../types/board"
import { Transaction } from "../types/transaction"

export const defaultCols: Column[] = [
  {
    selfUuid: "complete",
    title: "Complete",
  },
  {
    selfUuid: "pending",
    title: "Pending",
  },
  {
    selfUuid: "failed",
    title: "Failed",
  },
]

export const defaultTasks: Transaction[] = [
  {
    selfUuid: "jdofs32",
    columnUuid: "complete",
    amount: 30495,
    currency: "$",
    origin: "NPC Bank",
    sender: "Jane Doe:534050329503205903" },
]
