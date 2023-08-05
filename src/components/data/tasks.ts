import { Column, Task } from "../../types/board"

export const defaultCols: Column[] = [
  {
    selfUuid: "todo",
    title: "Todo",
  },
  {
    selfUuid: "doing",
    title: "Work in progress",
  },
  {
    selfUuid: "done",
    title: "Done",
  },
]

export const defaultTasks: Task[] = [
  {
    selfUuid: "1",
    columnUuid: "todo",
    inner: "List admin APIs for dashboard",
  },
  {
    selfUuid: "2",
    columnUuid: "todo",
    inner:
      "Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation",
  },
  {
    selfUuid: "3",
    columnUuid: "doing",
    inner: "Conduct security testing",
  },
  {
    selfUuid: "4",
    columnUuid: "doing",
    inner: "Analyze competitors",
  },
  {
    selfUuid: "5",
    columnUuid: "done",
    inner: "Create UI kit documentation",
  },
  {
    selfUuid: "6",
    columnUuid: "done",
    inner: "Dev meeting",
  },
  {
    selfUuid: "7",
    columnUuid: "done",
    inner: "Deliver dashboard prototype",
  },
  {
    selfUuid: "8",
    columnUuid: "todo",
    inner: "Optimize application performance",
  },
  {
    selfUuid: "9",
    columnUuid: "todo",
    inner: "Implement data validation",
  },
  {
    selfUuid: "10",
    columnUuid: "todo",
    inner: "Design database schema",
  },
  {
    selfUuid: "11",
    columnUuid: "todo",
    inner: "Integrate SSL web certificates into workflow",
  },
  {
    selfUuid: "12",
    columnUuid: "doing",
    inner: "Implement error logging and monitoring",
  },
  {
    selfUuid: "13",
    columnUuid: "doing",
    inner: "Design and implement responsive UI",
  },
]
