import { CounterData } from "../types/transaction"
import { COMPLETE, FAILED, PENDING } from "./constants"

export const BankingCounter: React.FC<CounterData> = ({ 
  totalTransactions, 
}) => {
  const influx = totalTransactions.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0,
  )
  const complete = totalTransactions.filter(
    item => item.columnUuid === COMPLETE,
  ).length
  const pending = totalTransactions.filter(
    item => item.columnUuid === PENDING,
  ).length
  const failed = totalTransactions.filter(
    item => item.columnUuid === FAILED,
  ).length
  return (
    <div className="grid-2 bg-mainBackgroundColor p-2.5 items-center text-left rounded-xl border-2 sticky">
      <div>
        <b>Total transactions:</b> {totalTransactions.length}<br />
        <b>Total influx:</b> {influx}
      </div>
      <div className="grid">
        <span><b>{COMPLETE}</b></span><span><b>{PENDING}</b></span><span><b>{FAILED}</b></span>
        <span>{complete}</span><span>{pending}</span><span>{failed}</span>
      </div>
    </div>
  )
}
