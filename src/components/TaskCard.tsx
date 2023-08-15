import { useState } from "react"
import { TrashIcon } from "./icons"
import { BaseItem, ItemUuid } from "../types/board"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { TASK } from "./constants"

type Props = {
  task: BaseItem
  deleteTask: (uuid: ItemUuid) => void
  updateTask: (uuid: ItemUuid, inner: string) => void
}

export const TaskCard: React.FC<Props> = ({ task, deleteTask, updateTask }) =>  {
  const [isMouseOver, setMouseIsOver] = useState(false)
  const [isEditMode, setEditMode] = useState(false)

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.selfUuid,
    data: {
      type: TASK,
      task,
    },
    disabled: isEditMode,
  })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  const toggleEditMode = () => {
    setEditMode((prev) => !prev)
    setMouseIsOver(false)
  }

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="opacity-30 bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl border-2 border-indigo-500  cursor-grab relative"
      />
    )
  }
  const getInner = () => {
    if (task.inner) {
      return task.inner
    } else {
      return <span>
        <b>amount:</b> {task.currency} {task.amount?.toLocaleString()}<br/ >
        <b>from:</b> {task.sender}<br/ >
        <b>origin:</b> {task.origin}<br/ >
      </span>
    }
  }

  if (isEditMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-indigo-700 cursor-grab relative"
      >
        <textarea
          className="h-[90%] w-full resize-none border-none rounded bg-transparent text-white focus:outline-none"
          value={getInner() as string}
          autoFocus
          placeholder="Task inner here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode()
            }
          }}
          onChange={(e) => updateTask(task.selfUuid, e.target.value)}
        />
      </div>
    )
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-indigo-700 cursor-grab relative task"
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
    >
      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
        {getInner()}
      </p>
      {isMouseOver && (
        <button
          onClick={() => deleteTask(task.selfUuid)}
          className="stroke-white absolute right-4 top-1/2 -translate-y-1/2 bg-columnBackgroundColor p-2 rounded opacity-60 hover:opacity-100"
        >
          <TrashIcon />
        </button>
      )}
    </div>
  )
}
