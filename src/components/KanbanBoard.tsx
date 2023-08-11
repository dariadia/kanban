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
import { defaultCols, defaultTasks } from "../data/tasks"
import { COLUMN, TASK } from "./constants"

export const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>(defaultCols)
  const columnsUuid = useMemo(() => columns.map(col => col.selfUuid), [columns])
  const [tasks, setTasks] = useState<Task[]>(defaultTasks)
  const [isActiveColumn, setActiveColumn] = useState<Column | null>(null)
  const [isActiveTask, setActiveTask] = useState<Task | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  )

  return (
    <div
      className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]"
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
            className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBackgroundColor border-2 border-columnBackgroundColor p-4 ring-indigo-700 hover:ring-2 flex gap-2"
          >
            <PlusIcon />
            Add Column
          </button>
        </div>
        {createPortal(
          <DragOverlay>
            {isActiveColumn && (
              <ColumnContainer
                column={isActiveColumn}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                createTask={createTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
                tasks={tasks.filter(
                  (task) => task.columnUuid === isActiveColumn.selfUuid
                )}
              />
            )}
            {isActiveTask && (
              <TaskCard
                task={isActiveTask}
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

  function createTask(columnUuid: ItemUuid): void {
    const newTask: Task = {
      selfUuid: generateUuid(),
      columnUuid,
      inner: `Task ${tasks.length + 1}`,
    }
    setTasks([...tasks, newTask])
  }

  function deleteTask(uuid: ItemUuid): void {
    const newTasks = tasks.filter((task) => task.selfUuid !== uuid)
    setTasks(newTasks)
  }

  function updateTask(uuid: ItemUuid, inner: string): void {
    const newTasks = tasks
      .map((task) => task.selfUuid !== uuid 
        ? task : { ...task, inner })
    setTasks(newTasks)
  }

  function createNewColumn(): void {
    const columnToAdd: Column = {
      selfUuid: generateUuid(),
      title: `Column ${columns.length + 1}`,
    }

    setColumns([...columns, columnToAdd])
  }

  function deleteColumn(uuid: ItemUuid): void {
    const filteredColumns = columns.filter(col => col.selfUuid !== uuid)
    setColumns(filteredColumns)

    const newTasks = tasks.filter(task => task.columnUuid !== uuid)
    setTasks(newTasks)
  }

  function updateColumn(uuid: ItemUuid, title: string): void  {
    const newColumns = columns.map((col) => {
      if (col.selfUuid !== uuid) return col
      return { ...col, title }
    })

    setColumns(newColumns)
  }

  function onDragStart(event: DragStartEvent): void {
    if (event.active.data.current?.type === COLUMN) {
      return setActiveColumn(event.active.data.current.column)
    }

    if (event.active.data.current?.type === TASK) {
      return setActiveTask(event.active.data.current.task)
    }
  }

  function onDragEnd(event: DragEndEvent): void {
    setActiveColumn(null)
    setActiveTask(null)

    const { active, over } = event
    if (!over) return

    const activeUuid = active.id
    const overUuid = over.id

    if (activeUuid === overUuid) return

    setColumns((columns) => {
      const isActiveColumnIndex = columns.findIndex(col => col.selfUuid === activeUuid)
      const overColumnIndex = columns.findIndex(col => col.selfUuid === overUuid)
      return arrayMove(columns, isActiveColumnIndex, overColumnIndex)
    })
  }

  function onDragOver(event: DragOverEvent): null | undefined  {
    const { active, over } = event
    if (!over) return null
    const activeUuid = active.id
    const overUuid = over.id
    if (activeUuid === overUuid) return null
    const isActiveATask = active.data.current?.type === TASK
    const isOverATask = over.data.current?.type === TASK
    if (!isActiveATask) return null
    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((task) => task.selfUuid === activeUuid)
        const overIndex = tasks.findIndex((task) => task.selfUuid === overUuid)
        tasks[activeIndex].columnUuid = tasks[overIndex].columnUuid
        return arrayMove(tasks, activeIndex, overIndex)
      })
    }

    const isOverAColumn = over.data.current?.type === COLUMN
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex(task => task.selfUuid === activeUuid)
        tasks[activeIndex].columnUuid = `${overUuid}`
        return arrayMove(tasks, activeIndex, activeIndex)
      })
    }
  }
}
