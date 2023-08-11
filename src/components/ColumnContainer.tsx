import { SortableContext, useSortable } from "@dnd-kit/sortable"
import { TrashIcon, PlusIcon } from "./icons"
import { Column, ItemUuid, Task } from "../types/board"
import { CSS } from "@dnd-kit/utilities"
import { useMemo, useState } from "react"
import { TaskCard } from "."
import { COLUMN } from "./constants"

type Props = {
  tasks: Task[]
  column: Column
  deleteColumn: (uuid: ItemUuid) => void
  updateColumn: (uuid: ItemUuid, title: string) => void
  createTask: (columnUuuuid: ItemUuid) => void
  updateTask: (uuid: ItemUuid, inner: string) => void
  deleteTask: (uuid: ItemUuid) => void
}

export const ColumnContainer: React.FC<Props> = (props) => {
  const {
    column,
    deleteColumn,
    updateColumn,
    createTask,
    tasks,
    deleteTask,
    updateTask,
  } = props
  const [isEditMode, setEditMode] = useState(false)
  const tasksUuids = useMemo(() => tasks.map((task) => task.selfUuid), [tasks])

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.selfUuid,
    data: {
      type: COLUMN,
      column,
    },
    disabled: isEditMode,
  })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="w-[350px] h-[500px] bg-columnBackgroundColor flex flex-col opacity-40 border-2 border-indigo-500 max-h-[500px] rounded-md"
      />
    )
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col bg-columnBackgroundColor"
    >
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true)
        }}
        className="bg-mainBackgroundColor text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-columnBackgroundColor border-4 flex items-center justify-between"
      >
        <div className="flex gap-2">
          {!isEditMode && column.title}
          {isEditMode && (
            <input
              className="bg-black focus:border-indigo-500 border rounded outline-none px-2"
              value={column.title}
              onChange={(e) => updateColumn(column.selfUuid, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false)
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return
                setEditMode(false)
              }}
            />
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              deleteColumn(column.selfUuid)
            }}
            className="px-1 py-2 stroke-gray-500 hover:stroke-lilac-500 rounded"
          >
            <TrashIcon />
          </button>
          <button
            className="flex gap-2 text-gray-500 items-center rounded-md hover:text-lilac-500"
            onClick={() => {
              createTask(column.selfUuid)
            }}
          >
            <PlusIcon />
            Add task
          </button>
        </div>
      </div>
      <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksUuids}>
          {tasks.map((task) => (
            <TaskCard
              key={task.selfUuid}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  )
}
