import { PlusIcon } from "./icons"
import { useMemo, useState } from "react"
import { Column, ItemUuid, Task } from "../types/board"
import { ColumnContainer } from "."
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { SortableContext, arrayMove } from "@dnd-kit/sortable"
import { createPortal } from "react-dom"
import { TaskCard } from "."
import { generateUuid } from "../helpers/uuid-helper"
import { defaultCols, defaultTasks } from "./data/tasks"

export const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>(defaultCols)
  const columnsUuid = useMemo(() => columns.map(col => col.selfUuid), [columns])
  const [tasks, setTasks] = useState<Task[]>(defaultTasks)
  const [activeColumn, setActiveColumn] = useState<Column | null>(null)

  const [activeTask, setActiveTask] = useState<Task | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  )

  return (
    <div
      className="
        m-auto
        flex
        min-h-screen
        w-full
        items-center
        overflow-x-auto
        overflow-y-hidden
        px-[40px]
    "
    >
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className="m-auto flex gap-4">
          <div className="flex gap-4">
            <SortableContext items={columnsUuid}>
              {columns.map((col) => (
                <ColumnContainer
                  key={col.selfUuid}
                  column={col}
                  deleteColumn={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                  tasks={tasks.filter((task) => task.columnUuid === col.selfUuid)}
                />
              ))}
            </SortableContext>
          </div>
          <button
            onClick={() => {
              createNewColumn()
            }}
            className="
      h-[60px]
      w-[350px]
      min-w-[350px]
      cursor-pointer
      rounded-lg
      bg-mainBackgroundColor
      border-2
      border-columnBackgroundColor
      p-4
      ring-rose-500
      hover:ring-2
      flex
      gap-2
      "
          >
            <PlusIcon />
            Add Column
          </button>
        </div>

        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                createTask={createTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
                tasks={tasks.filter(
                  (task) => task.columnUuid === activeColumn.selfUuid
                )}
              />
            )}
            {activeTask && (
              <TaskCard
                task={activeTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  )

  function createTask(columnUuid: ItemUuid) {
    const newTask: Task = {
      selfUuid: `${generateUuid()}`,
      columnUuid,
      inner: `Task ${tasks.length + 1}`,
    }

    setTasks([...tasks, newTask])
  }

  function deleteTask(uuid: ItemUuid) {
    const newTasks = tasks.filter((task) => task.selfUuid !== uuid)
    setTasks(newTasks)
  }

  function updateTask(uuid: ItemUuid, inner: string) {
    const newTasks = tasks.map((task) => {
      if (task.selfUuid !== uuid) return task
      return { ...task, inner }
    })

    setTasks(newTasks)
  }

  function createNewColumn() {
    const columnToAdd: Column = {
      selfUuid: `${generateUuid()}`,
      title: `Column ${columns.length + 1}`,
    }

    setColumns([...columns, columnToAdd])
  }

  function deleteColumn(uuid: ItemUuid) {
    const filteredColumns = columns.filter(col => col.selfUuid !== uuid)
    setColumns(filteredColumns)

    const newTasks = tasks.filter(task => task.columnUuid !== uuid)
    setTasks(newTasks)
  }

  function updateColumn(uuid: ItemUuid, title: string) {
    const newColumns = columns.map((col) => {
      if (col.selfUuid !== uuid) return col
      return { ...col, title }
    })

    setColumns(newColumns)
  }

  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column)
      return
    }

    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task)
      return
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null)
    setActiveTask(null)

    const { active, over } = event
    if (!over) return

    const activeUuid = active.id
    const overUuid = over.id

    if (activeUuid === overUuid) return

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex(col => col.selfUuid === activeUuid)
      const overColumnIndex = columns.findIndex(col => col.selfUuid === overUuid)
      return arrayMove(columns, activeColumnIndex, overColumnIndex)
    })
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event
    if (!over) return

    const activeUuid = active.id
    const overUuid = over.id

    if (activeUuid === overUuid) return

    const isActiveATask = active.data.current?.type === "Task"
    const isOverATask = over.data.current?.type === "Task"

    if (!isActiveATask) return

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((task) => task.selfUuid === activeUuid)
        const overIndex = tasks.findIndex((task) => task.selfUuid === overUuid)

        tasks[activeIndex].columnUuid = tasks[overIndex].columnUuid

        return arrayMove(tasks, activeIndex, overIndex)
      })
    }

    const isOverAColumn = over.data.current?.type === "Column"
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex(task => task.selfUuid === activeUuid)
        tasks[activeIndex].columnUuid = `${overUuid}`
        return arrayMove(tasks, activeIndex, activeIndex)
      })
    }
  }
}
