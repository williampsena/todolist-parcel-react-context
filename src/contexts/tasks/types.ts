import { TaskActionType } from './reducer'
import { Dispatch } from 'react'

export type AddTaskEvent = (task: Task) => void
export type ToggleTaskEvent = (task: Task) => void
export type ChangeFiltersEvent = (filter?: boolean) => void
export type ClearTaskEvent = (...args: any[]) => void

export interface TaskState {
  tasks: Task[]
  filters: {
    status?: boolean
  }
}

export interface TaskContextState {
  state: TaskState
  dispatch: Dispatch<TaskActionType>
  actions: {
    addTask: AddTaskEvent
    toggleTask: ToggleTaskEvent
    clearTasks: ClearTaskEvent
    changeFilters: ChangeFiltersEvent
  }
}

export interface Task {
  name: string
  done: boolean
}
