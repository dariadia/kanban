import { SortableContext, useSortable } from "@dnd-kit/sortable"
import { TrashIcon, PlusIcon } from "./icons"
import { Column, ItemUuid, Task } from "../types/board"
import { CSS } from "@dnd-kit/utilities"
import { useMemo, useState } from "react"
import { TaskCard } from "."

type Props = {
  tasks: Task[]
  column: Column
  deleteColumn: (uuid: ItemUuid) => void
  updateColumn: (uuid: ItemUuid, title: string) => void
  createTask: (columnUuuuid: ItemUuid) => void
  updateTask: (uuid: ItemUuid, inner: string) => void
  deleteTask: (uuid: ItemUuid) => void
}

export const ColumnContainer: React.FC<Props> = ({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
}) => {
  const [editMode, setEditMode] = useState(false)
  const tasksUuids = useMemo(() => {
    return tasks.map((task) => task.selfUuid)
  }, [tasks])

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
      type: "Column",
      column,
    },
    disabled: editMode,
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
        className="bg-columnBackgroundColor opacity-40 border-2 border-indigo-500 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"
      ></div>
    )
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-columnBackgroundColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"
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
          {!editMode && column.title}
          {editMode && (
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
            className="stroke-gray-500 hover:stroke-lilac-500 rounded px-1 py-2"
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
